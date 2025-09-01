import { AlertTriangle } from 'lucide-react';

const DisclaimerBanner = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-800">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span className="font-medium">
            Ce site n'est pas le site officiel. Il est utilisé uniquement dans le cadre de la formation 1000Sites.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;