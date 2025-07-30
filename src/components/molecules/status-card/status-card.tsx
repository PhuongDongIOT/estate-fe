interface StatusCardProps {
  title: string;
  timestamp: string;
  icon?: React.ReactNode;
  statusColor?: string; // e.g. 'text-green-600', 'text-red-600'
  className?: string;
}

export const StatusCard = ({
  title,
  timestamp,
  icon,
  statusColor = 'text-gray-900',
  className = ''
}: StatusCardProps) => {
  return (
    <div>
      <div className={`p-4${className}`}>
        <div className="flex items-start gap-2">
          {icon && <div className="pt-0.5">{icon}</div>}
          <div>
            <p className={`text-sm font-medium ${statusColor}`}>{title}</p>
            <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-[1px] bg-gray-200"></div>
    </div>
  );
};
