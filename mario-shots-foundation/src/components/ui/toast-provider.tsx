"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

interface ToastContextType {
    toasts: Toast[];
    addToast: (message: string, type?: ToastType, duration?: number) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback((message: string, type: ToastType = "info", duration = 4000) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newToast: Toast = { id, message, type, duration };

        setToasts((prev) => [...prev, newToast]);

        if (duration > 0) {
            setTimeout(() => removeToast(id), duration);
        }
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

function ToastContainer({ toasts, removeToast }: { toasts: Toast[]; removeToast: (id: string) => void }) {
    const getIcon = (type: ToastType) => {
        switch (type) {
            case "success": return <CheckCircle className="h-5 w-5 text-green-500" />;
            case "error": return <AlertCircle className="h-5 w-5 text-red-500" />;
            case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
            default: return <Info className="h-5 w-5 text-blue-500" />;
        }
    };

    const getStyles = (type: ToastType) => {
        switch (type) {
            case "success": return "border-green-500/30 bg-green-500/10";
            case "error": return "border-red-500/30 bg-red-500/10";
            case "warning": return "border-yellow-500/30 bg-yellow-500/10";
            default: return "border-blue-500/30 bg-blue-500/10";
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none">
            {toasts.map((toast, index) => (
                <div
                    key={toast.id}
                    className={`
                        pointer-events-auto
                        flex items-center gap-3
                        px-4 py-3 rounded-xl
                        border backdrop-blur-md
                        shadow-lg shadow-black/10
                        animate-in slide-in-from-bottom-4 fade-in duration-300
                        ${getStyles(toast.type)}
                    `}
                    style={{
                        animationDelay: `${index * 50}ms`,
                    }}
                >
                    {getIcon(toast.type)}
                    <span className="text-sm font-medium text-foreground">{toast.message}</span>
                    <button
                        type="button"
                        onClick={() => removeToast(toast.id)}
                        className="ml-2 p-1 rounded-full hover:bg-foreground/10 transition-colors"
                        aria-label="Dismiss"
                    >
                        <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>
            ))}
        </div>
    );
}
