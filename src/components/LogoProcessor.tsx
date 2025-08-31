import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '../utils/backgroundRemoval';

interface LogoProcessorProps {
  originalLogoPath: string;
  onProcessed: (processedLogoUrl: string) => void;
  className?: string;
  alt?: string;
}

export const LogoProcessor = ({ originalLogoPath, onProcessed, className, alt }: LogoProcessorProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        // Load the original image
        const img = await loadImageFromUrl(originalLogoPath);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
        onProcessed(url);
        
      } catch (err) {
        console.error('Logo processing error:', err);
        setError('Failed to process logo');
        // Fallback to original logo
        onProcessed(originalLogoPath);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalLogoPath, onProcessed]);

  // Show the processed logo once ready, otherwise show original
  const logoSrc = processedLogoUrl || originalLogoPath;

  return (
    <img 
      src={logoSrc} 
      alt={alt || "Mavidaa Logo"} 
      className={className}
      style={{ 
        opacity: isProcessing ? 0.7 : 1,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
};