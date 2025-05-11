import React from 'react';
import { Leaf as LeafIcon } from 'lucide-react';

interface LeafProps {
  className?: string;
}

const Leaf: React.FC<LeafProps> = ({ className }) => {
  return <LeafIcon className={className} />;
};

export default Leaf;