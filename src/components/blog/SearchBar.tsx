import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialValue = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onValueChange={handleChange}
        startContent={<Search size={16} className="text-default-400" />}
        endContent={
          searchTerm && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={clearSearch}
              className="text-default-400 hover:text-primary"
            >
              <X size={14} />
            </Button>
          )
        }
        radius="lg"
        className="max-w-full"
        classNames={{
          inputWrapper: "bg-default-100"
        }}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
