import { useEffect, useState } from "react";

// Hook to ensure components only render on client side
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

// Higher-order component to wrap components that should only render on client
export function withClientOnly(Component) {
  return function ClientOnlyComponent(props) {
    const isClient = useClientOnly();

    if (!isClient) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
