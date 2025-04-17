
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  // Handle the "All" category specially
  const handleValueChange = (value: string) => {
    if (value) {
      onCategoryChange(value);
    } else {
      // If empty (user clicked active category), default to "all"
      onCategoryChange("all");
    }
  };

  return (
    <div className="mb-8">
      <h3 className="font-medium mb-3 text-foreground/80">Filter by Category</h3>
      <ToggleGroup type="single" value={activeCategory} onValueChange={handleValueChange} className="flex flex-wrap gap-2">
        <ToggleGroupItem value="all" className="border border-border/60 rounded-full text-sm px-4 py-1 h-auto">
          All
        </ToggleGroupItem>
        {categories.map((category) => (
          <ToggleGroupItem
            key={category}
            value={category}
            className="border border-border/60 rounded-full text-sm px-4 py-1 h-auto"
          >
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CategoryFilter;
