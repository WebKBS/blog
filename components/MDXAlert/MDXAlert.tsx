import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react'; // Lucide 아이콘 import
import Link from 'next/link';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  href?: string;
}

const MDXAlert = ({ type, message, href }: AlertProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-6 h-6 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'info':
        return <Info className="w-6 h-6 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex items-center p-4 mb-4 rounded-lg border flex-wrap ${getAlertClass(type)}`}
    >
      {renderIcon()}
      <span className="ml-3">{message}</span>
      {href && (
        <Link href={href} className="text-blue-500 underline ml-2">
          {href}
        </Link>
      )}
    </div>
  );
};

const getAlertClass = (type = 'info') => {
  switch (type) {
    case 'success':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'error':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'warning':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'info':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    default:
      return '';
  }
};

export default MDXAlert;