#!/bin/bash

# Fix auto-generated documentation titles and navigation
# Replace "Table of Contents" with the actual module name
# Improve header hierarchy for better navigation

echo "Fixing documentation titles and navigation..."

for file in $(find docs/components -name "*.md" -exec grep -l "# Table of Contents" {} \;); do
  # Extract the module name from the first TOC entry
  module_name=$(grep -m 1 "^\* \[.*\]" "$file" | sed 's/^\* \[\(.*\)\](#.*)/\1/' | sed 's/\\_/_/g')
  if [ ! -z "$module_name" ]; then
    echo "Processing $file -> $module_name"
    
    # Replace "Table of Contents" with module name
    sed -i "1s/# Table of Contents/# $module_name/" "$file"
    
    # Promote method headers from H4 (####) to H3 (###) for better navigation
    # This makes methods appear in the right-hand navigation menu
    # Handle both regular and escaped method names
    sed -i 's/^#### \([a-zA-Z_\\][a-zA-Z0-9_\\]*\)(/### \1(/g' "$file"
    
    # Also promote method headers that don't have parameters (like properties)
    sed -i 's/^#### \([a-zA-Z_\\][a-zA-Z0-9_\\]*\)$/### \1/g' "$file"
    
    # Clean up method headers to show only method name (without parameters) in navigation
    # This keeps the full signature in the content but shows clean names in the TOC
    sed -i 's/^### \([a-zA-Z_\\][a-zA-Z0-9_\\]*\)(.*/### \1/g' "$file"
    
    # Also clean up the table of contents to show clean method names
    sed -i 's/\* \[\([a-zA-Z_\\][a-zA-Z0-9_\\]*\)([^)]*)/  * [\1/g' "$file"
    
    # Promote standalone functions (those at module level, not class methods) to H2
    # Identify standalone functions from TOC: they appear as "  * [function_name]" (module level)
    # vs class methods which appear as "    * [method_name]" (indented further)
    # Promote standalone functions (those at module level, not class methods) to H2
    # This creates a clearer navigation hierarchy where standalone functions 
    # are separate from class methods
    
    # For al_general.md, promote common standalone functions
    if [[ "$file" == *"al_general.md" ]]; then
      sed -i 's/^### section\\_links$/## section\\_links/g' "$file"
      sed -i 's/^### will\\_send\\_to\\_real\\_court$/## will\\_send\\_to\\_real\\_court/g' "$file"
      sed -i 's/^### filter\\_letters$/## filter\\_letters/g' "$file"
      sed -i 's/^### fa\\_icon$/## fa\\_icon/g' "$file"
      sed -i 's/^### is\\_sms\\_enabled$/## is\\_sms\\_enabled/g' "$file"
      sed -i 's/^### is\\_phone\\_or\\_email$/## is\\_phone\\_or\\_email/g' "$file"
      sed -i 's/^### github\\_modified\\_date$/## github\\_modified\\_date/g' "$file"
      sed -i 's/^### language\\_name$/## language\\_name/g' "$file"
      sed -i 's/^### safe\\_states\\_list$/## safe\\_states\\_list/g' "$file"
      sed -i 's/^### has\\_parsable\\_pronouns$/## has\\_parsable\\_pronouns/g' "$file"
      sed -i 's/^### parse\\_custom\\_pronouns$/## parse\\_custom\\_pronouns/g' "$file"
      sed -i 's/^### get\\_visible\\_al\\_nav\\_items$/## get\\_visible\\_al\\_nav\\_items/g' "$file"
    fi
    
    # Convert **Arguments**: and **Returns**: to proper H4 headings for better navigation
    sed -i 's/^\*\*Arguments\*\*:/#### Arguments/g' "$file"
    sed -i 's/^\*\*Returns\*\*:/#### Returns/g' "$file"
    sed -i 's/^\*\*Attributes\*\*:/#### Attributes/g' "$file"
    sed -i 's/^\*\*Notes\*\*:/#### Notes/g' "$file"
    sed -i 's/^\*\*Raises\*\*:/#### Raises/g' "$file"
    
    # Remove stray YAML frontmatter blocks that appear in the middle of files
    # These are artifacts from the old template processing
    sed -i '/^---$/,/^---$/d' "$file"
  fi
done

echo "Done fixing documentation titles and navigation."
