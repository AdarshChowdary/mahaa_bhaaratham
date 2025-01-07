import { Alert, AlertDescription } from '@/components/ui/alert';
import { X } from 'lucide-react';

const AlertNotification = ({ show, letter, onClose }) => {
    if (!show) return null;
    
    return (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
            <Alert className="bg-[#62b6cb] text-[#1b4965] border-none shadow-lg rounded-none">
                <AlertDescription className="flex items-center justify-between">
                    <span>No characters found starting with <span className='font-bold'>'{letter}'</span></span>
                    <button 
                        onClick={onClose}
                        className="ml-4 hover:opacity-75 transition-opacity"
                    >
                        <X size={18} />
                    </button>
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default AlertNotification