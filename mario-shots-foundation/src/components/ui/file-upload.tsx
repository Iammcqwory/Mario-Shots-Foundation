import type React from "react";
import { useRef, useState } from "react";
import { Button } from "./button";
import { Alert } from "./alert";

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setSuccess("");
    setProgress(0);
    const selected = e.target.files?.[0] || null;
    if (!selected) return;
    // Validate type
    if (!selected.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      return;
    }
    // Validate size (max 5MB)
    if (selected.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      return;
    }
    setFile(selected);
  };

  const handleUpload = async () => {
    if (!file) return;
    setError("");
    setSuccess("");
    setProgress(0);
    // Simulate upload progress
    for (let i = 1; i <= 10; i++) {
      await new Promise((res) => setTimeout(res, 80));
      setProgress(i * 10);
    }
    // Simulate upload success
    setSuccess("File uploaded successfully (demo only, not actually saved).");
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-black rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Upload an Image</h2>
      <label htmlFor="file-upload" className="block text-sm font-medium mb-2">Select an image to upload</label>
      <input
        ref={inputRef}
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
        title="Select an image file"
        placeholder="Choose file"
      />
      {file && (
        <div className="mb-4">
          <div>Selected: <span className="font-medium">{file.name}</span></div>
          <Button onClick={handleUpload} className="mt-2">Upload</Button>
        </div>
      )}
      {progress > 0 && progress < 100 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className={`bg-red-600 h-2.5 rounded-full transition-all`} 
            style={{ width: progress + '%' }}
          />
        </div>
      )}
      {error && <Alert variant="destructive">{error}</Alert>}
      {success && <Alert variant="default">{success}</Alert>}
    </div>
  );
} 