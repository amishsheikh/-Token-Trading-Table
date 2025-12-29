// src/components/atoms/SkeletonRow.tsx
export const SkeletonRow = () => (
  <tr className="animate-pulse border-b border-white/5">
    <td className="px-3 py-4"><div className="h-4 w-24 bg-white/10 rounded" /></td>
    <td className="px-3 py-4"><div className="h-4 w-16 bg-white/10 rounded ml-auto" /></td>
    <td className="px-3 py-4"><div className="h-4 w-12 bg-white/10 rounded ml-auto" /></td>
  </tr>
);
