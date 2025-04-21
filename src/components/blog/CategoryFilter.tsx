import React from 'react';
import { 
  Tabs, 
  Tab, 
  Chip 
} from "@nextui-org/react";
import { useTheme } from 'next-themes';

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
  const { theme } = useTheme();
  
  // Colors for categories
  const getCategoryColor = (category: string) => {
    const colors: Record<string, any> = {
      'Mindfulness': 'primary',
      'Sustainability': 'success',
      'Productivity': 'secondary',
      'Wellbeing': 'warning',
      'Home': 'default',
      'Food': 'danger', 
      'Travel': 'primary',
      'Creativity': 'secondary',
      'Ayurveda': 'success',
      'Indian Cuisine': 'danger',
      'Yoga & Meditation': 'warning',
      'All': 'default'
    };
    
    return colors[category] || 'default';
  };
  
  return (
    <div className="mb-6">
      <Tabs 
        aria-label="Categories" 
        color="primary"
        variant="underlined" 
        className="w-full"
        classNames={{
          tabList: "gap-2 w-full relative flex-wrap",
          tab: "px-4 py-2",
          tabContent: "group-data-[selected=true]:text-primary"
        }}
        selectedKey={activeCategory === 'all' ? 'All' : activeCategory}
        onSelectionChange={(key) => onCategoryChange(key as string)}
      >
        {categories.map((category) => (
          <Tab 
            key={category} 
            title={
              <div className="flex items-center gap-2">
                <Chip 
                  size="sm" 
                  color={getCategoryColor(category)} 
                  variant={theme === 'dark' ? 'flat' : 'shadow'}
                  className="h-5 px-2"
                >
                  {category === 'All' ? 'All' : category.charAt(0)}
                </Chip>
                <span>{category}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryFilter;
