import { useEffect, useState } from 'react';
import { useAuth } from '@getmocha/users-service/react';
import { useNavigate } from 'react-router';

const AuthCallback = () => {
  const { exchangeCodeForSessionToken } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        
        if (!code) {
          setStatus('error');
          setError('No authorization code received');
          return;
        }

        await exchangeCodeForSessionToken();
        setStatus('success');
        
        // Redirect to homepage after successful authentication
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 2000);
        
      } catch (err) {
        console.error('Authentication failed:', err);
        setStatus('error');
        setError('Authentication failed. Please try again.');
      }
    };

    handleAuthCallback();
  }, [exchangeCodeForSessionToken, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-[#0496C6] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {status === 'loading' && (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-[#06ABE0] to-[#0496c6] rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Completing Sign In...</h2>
            <p className="text-gray-600">Please wait while we authenticate your account.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to BlockchainForge!</h2>
            <p className="text-gray-600 mb-6">Your account has been successfully authenticated.</p>
            <div className="flex items-center justify-center space-x-2 text-[#06ABE0]">
              <div className="w-2 h-2 bg-[#06ABE0] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#06ABE0] rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-[#06ABE0] rounded-full animate-bounce delay-150"></div>
              <span className="ml-2 text-sm">Redirecting...</span>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication Failed</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="px-6 py-3 bg-gradient-to-r from-[#06ABE0] to-[#0496c6] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Return to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
