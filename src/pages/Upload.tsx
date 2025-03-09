import { useState, ChangeEvent, DragEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createPost } from "../services/api";

const UploadPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['userPosts'] });
      toast.success("Post created successfully!");
      navigate("/");
    },
    onError: () => {
      toast.error("Failed to create post");
    }
  });

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match("image.*")) {
      toast.error("Only image files are allowed");
      return;
    }

    // Create a preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
  };

  const handleSubmit = async () => {
    if (!image) {
      toast.error("Please select an image to upload");
      return;
    }

    // In a real app, you would upload the image to a server first
    // Then get the URL and save it with the post
    // For simplicity, we'll just use the base64 image
    createPostMutation.mutate({
      user: {
        id: "123", // This would come from authentication
        username: "current_user",
        avatar: "/placeholder.svg",
      },
      image,
      caption,
      likes: 0,
      comments: 0,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <MainLayout>
      <div className="py-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create New Post</h1>

        {!image ? (
          <div
            className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center h-80 transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-border"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <ImageIcon size={48} className="text-muted-foreground mb-4" />
            <p className="text-center mb-4">
              Drag and drop your photo here, or click to select
            </p>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <Button className="px-6">Select from computer</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-scale-in">
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                src={image}
                alt="Upload preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={clearImage}
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
              >
                <X size={16} />
              </button>
            </div>

            <Textarea
              placeholder="Write a caption..."
              className="resize-none"
              rows={4}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setImage(null)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} disabled={createPostMutation.isPending}>
                {createPostMutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                    <span>Posting...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Upload size={16} />
                    <span>Share</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default UploadPage;
