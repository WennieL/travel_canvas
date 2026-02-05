import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-8 text-red-900 font-sans">
                    <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full border border-red-200">
                        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-3xl">💥</span> Something went wrong
                        </h1>
                        <p className="mb-4 text-red-700">The application crashed. Here is the error details:</p>

                        <div className="bg-slate-900 text-red-300 p-4 rounded-lg overflow-auto text-sm font-mono mb-6 max-h-[300px]">
                            <p className="font-bold mb-2">{this.state.error?.toString()}</p>
                            <pre className="text-xs opacity-75 whitespace-pre-wrap">
                                {this.state.errorInfo?.componentStack}
                            </pre>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                            >
                                Reload Page
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.reload();
                                }}
                                className="px-6 py-2 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                            >
                                Clear Data & Reload
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
