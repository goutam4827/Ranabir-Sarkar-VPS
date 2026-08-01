import React, { useState, useRef } from 'react';
import { Upload, FileSearch, Sparkles, CheckCircle, AlertCircle, RefreshCw, Eye } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const DocumentScanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');
  const [docType, setDocType] = useState<string>('passport');
  const [loading, setLoading] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (JPG, PNG, WebP).');
      return;
    }

    setMimeType(file.type);
    setError(null);
    setAnalysis(null);

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const response = await fetch('/api/analyze-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: selectedImage,
          mimeType,
          documentType: docType
        })
      });

      if (!response.ok) {
        throw new Error('Failed to analyze document image. Please try again.');
      }

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(err.message || 'An error occurred during image evaluation.');
    } finally {
      setLoading(false);
    }
  };

  const resetScanner = () => {
    setSelectedImage(null);
    setAnalysis(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="doc-scanner" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <FileSearch className="w-4 h-4 text-blue-700 dark:text-amber-400" />
            <span>AI Document Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Document Readiness Scanner
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Upload a photo or scan of your Passport, Visa Form, or Educational Certificate to check image legibility, document type, and MEA Apostille / Attestation readiness.
          </p>
        </ScrollReveal>

        {/* Scanner Work Area */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                1. Select Document Category
              </label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
              >
                <option value="passport">Passport First & Last Page</option>
                <option value="visa-application">Visa Application Form / Cover Letter</option>
                <option value="certificate">Educational Degree / Marksheet (for HRD/Apostille)</option>
                <option value="pcc">Police Clearance Certificate (PCC)</option>
                <option value="bank-statement">Bank Statement / Financial Proof</option>
                <option value="other">Other Travel / Legal Document</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                2. Upload Document Photo / Scan
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="doc-upload-input"
              />
              <label
                htmlFor="doc-upload-input"
                className="w-full flex items-center justify-center space-x-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 border-dashed rounded-xl py-2.5 px-4 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4 text-blue-700 dark:text-amber-400" />
                <span>{selectedImage ? "Change Image" : "Choose File (JPG / PNG)"}</span>
              </label>
            </div>
          </div>

          {/* Image Preview & Scanner Trigger */}
          {selectedImage && (
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedImage}
                    alt="Uploaded document preview"
                    className="w-16 h-16 object-cover rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">Document Uploaded</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Ready for Gemini AI scan & legibility check</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-xs shadow-xs transition-transform hover:scale-105 disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 dark:text-slate-950" />
                    <span>{loading ? "Scanning..." : "Analyze Document"}</span>
                  </button>

                  <button
                    onClick={resetScanner}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700"
                    title="Remove Image"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl text-red-700 dark:text-red-300 text-xs flex items-center space-x-2 font-medium">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600 dark:text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Analysis Results */}
          {analysis && (
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-blue-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed shadow-sm">
              <div className="flex items-center space-x-2 text-blue-800 dark:text-amber-400 font-bold uppercase tracking-wider text-xs border-b border-slate-200 dark:border-slate-800 pb-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>AI Evaluation & Checklist Summary</span>
              </div>

              <div className="whitespace-pre-wrap font-sans text-slate-700 dark:text-slate-300 space-y-2">
                {analysis}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Evaluated by VPS Gemini AI System</span>
                <a
                  href="#contact"
                  className="text-blue-700 dark:text-amber-400 font-bold hover:underline"
                >
                  Need official submission assistance? Contact Mr. Ranabir Sarkar &rarr;
                </a>
              </div>
            </div>
          )}

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
