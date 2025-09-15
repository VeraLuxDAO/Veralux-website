import { CheckCircle, XCircle, Info } from "lucide-react";

export function RuleCard({ icon, title, items }) {
  return (
    <div
      className="bg-gradient-to-br bg-[rgba(51,102,255,0.03)] border border-[rgba(254,254,254,0.25)] 
            backdrop-blur-[50px] w-full from-[#0E1729] to-[#0B1323] rounded-xl p-8 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 font-tacticthin">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* Rules */}
      <ul className="space-y-4 text-md">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            {item.type === "check" && (
              <CheckCircle
                className="text-green-400 mt-1 flex-shrink-0"
                size={22}
              />
            )}
            {item.type === "x" && (
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={22} />
            )}
            {item.type === "info" && (
              <Info className="text-gray-400 mt-1 flex-shrink-0" size={22} />
            )}
            <span className="text-gray-300">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
