#!/usr/bin/env python3

"""
Run this to generate documentation pages from Docassemble interview files directly,
like we use pydoc to generate docs from .py files.

Currently, just grabs the comment in a `id: interview documentation` block, assumes
it's markdown, and puts it in a markdown file with a direct link to the interview
on the dev server. If no such block exists, no documentation is generated.
"""

from ruamel.yaml import YAML
import sys
import glob
from pathlib import Path

yaml = YAML(typ='safe', pure=True)

DEV_SERVER = "https://apps-dev.suffolklitlab.org/"

def generate_docs_from_yaml_file(file, component):
    new_file = Path(f"docs/interviews/{component}/{file.stem}.md")
    with open(file, 'r') as f:
        for block in yaml.load_all(f):
            if block and "id" in block and block['id'] == "interview documentation" and "comment" in block:
                new_file.parent.mkdir(parents=True, exist_ok=True)
                with open(new_file, 'w') as new_f:
                    new_f.write(block['comment'])
                    new_f.write(f"\n\nSee it [in action]({DEV_SERVER}/start/{component}/{file.stem}).");
                    return

def main(args):
    if not args:
        print("Generated no docs")
    for dir in args:
        component_name = Path(dir).stem.split("-")[-1].strip("/")
        for file in glob.glob(f"{dir}/docassemble/*/data/questions/*.yml"):
            generate_docs_from_yaml_file(Path(file), component_name)
  
if __name__ == '__main__':
    main(sys.argv[1:])
