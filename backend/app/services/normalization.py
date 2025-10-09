# Normalization Function

import re
import string
import unicodedata
import inflect 

def normalize_input(ingredients_string: str) -> list[str]:
    """
    Normalize a raw ingredient string by:
    - Splitting by commas
    - Lowercasing each ingredient
    - Stripping whitespace
    - Collapsing multiple spaces
    - Removing punctuation
    - Converting accented characters to ASCII
    - Removing empty 
    - Removal Plurals if Possible (using inflect engine)
    Returns a list of clean ingredient strings.
    """
    ingredients = []
    p = inflect.engine()

    for raw in ingredients_string.split(","):
        s = raw.lower().strip()
        s = re.sub(r"\s+", " ", s)
        s = s.replace("-", " ") # replace dashes with space before punctionation removal
        s = s.translate(str.maketrans("", "", string.punctuation))
        s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
        if s: # skip empty strings
            singular = p.singular_noun(s) # try to singularize
            if singular:
                ingredients.append(singular)
            else:
                ingredients.append(s)

    return ingredients
