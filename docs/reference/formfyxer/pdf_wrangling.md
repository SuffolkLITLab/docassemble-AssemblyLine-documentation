---
sidebar_label: pdf_wrangling
title: formfyxer.pdf_wrangling
---

## FormField Objects

```python
class FormField()
```

A data holding class, used to easily specify how a PDF form field should be created.

#### \_\_init\_\_

```python
def __init__(field_name: str,
             type_name: Union[FieldType, str],
             x: int,
             y: int,
             font_size: Optional[int] = None,
             tooltip: str = "",
             configs: Optional[Dict[str, Any]] = None)
```

Constructor

**Arguments**:

- `x` - the x position of the lower left corner of the field. Should be in X,Y coordinates,
  where (0, 0) is the lower left of the page, x goes to the right, and units are in
  points (1/72th of an inch)
- `y` - the y position of the lower left corner of the field. Should be in X,Y coordinates,
  where (0, 0) is the lower left of the page, y goes up, and units are in points
  (1/72th of an inch)
- `config` - a dictionary containing any keyword argument to the reportlab field functions,
  which will vary depending on what type of field this is. See section 4.7 of the
  [reportlab User Guide](https://www.reportlab.com/docs/reportlab-userguide.pdf)
- `field_name` - the name of the field, exposed to via most APIs. Not the tooltip, but `users1_name__0`

#### set\_fields

```python
def set_fields(in_file: Union[str, Path, BinaryIO],
               out_file: Union[str, Path, BinaryIO],
               fields_per_page: Iterable[Iterable[FormField]],
               *,
               overwrite=False)
```

Adds fields per page to the in_file PDF, writing the new PDF to out_file.

Example usage:
```
set_fields(&#x27;no_fields.pdf&#x27;, &#x27;four_fields_on_second_page.pdf&#x27;,
  [
    [],  # nothing on the first page
    [ # Second page
      FormField(&#x27;new_field&#x27;, &#x27;text&#x27;, 110, 105, configs={&#x27;width&#x27;: 200, &#x27;height&#x27;: 30}),
      # Choice needs value to be one of the possible options, and options to be a list of strings or tuples
      FormField(&#x27;new_choices&#x27;, &#x27;choice&#x27;, 110, 400, configs={&#x27;value&#x27;: &#x27;Option 1&#x27;, &#x27;options&#x27;: [&#x27;Option 1&#x27;, &#x27;Option 2&#x27;]}),
      # Radios need to have the same name, with different values
      FormField(&#x27;new_radio1&#x27;, &#x27;radio&#x27;, 110, 600, configs={&#x27;value&#x27;: &#x27;option a&#x27;}),
      FormField(&#x27;new_radio1&#x27;, &#x27;radio&#x27;, 110, 500, configs={&#x27;value&#x27;: &#x27;option b&#x27;})
    ]
  ]
)

#### rename\_pdf\_fields

```python
def rename_pdf_fields(in_file: Union[str, Path, BinaryIO],
                      out_file: Union[str, Path, BinaryIO],
                      mapping: Mapping[str, str]) -> None
```

Given a dictionary that maps old to new field names, rename the AcroForm
field with a matching key to the specified value

#### unlock\_pdf\_in\_place

```python
def unlock_pdf_in_place(in_file: Union[str, Path, BinaryIO]) -> None
```

Try using pikePDF to unlock the PDF it it is locked. This won&#x27;t work if it has a non-zero length password.

#### get\_existing\_pdf\_fields

```python
def get_existing_pdf_fields(
        in_file: Union[str, Path, BinaryIO, Pdf]) -> List[List[FormField]]
```

Use PikePDF to get fields from the PDF

#### swap\_pdf\_page

```python
def swap_pdf_page(*,
                  source_pdf: Union[str, Path, Pdf],
                  destination_pdf: Union[str, Path, Pdf],
                  source_offset: int = 0,
                  destination_offset: int = 0,
                  append_fields: bool = False) -> Pdf
```

(DEPRECATED: use copy_pdf_fields) Copies the AcroForm fields from one PDF to another blank PDF form. Optionally, choose a starting page for both
the source and destination PDFs. By default, it will remove any existing annotations (which include form fields)
in the destination PDF. If you wish to append annotations instead, specify `append_fields = True`

#### copy\_pdf\_fields

```python
def copy_pdf_fields(*,
                    source_pdf: Union[str, Path, Pdf],
                    destination_pdf: Union[str, Path, Pdf],
                    source_offset: int = 0,
                    destination_offset: int = 0,
                    append_fields: bool = False) -> Pdf
```

Copies the AcroForm fields from one PDF to another blank PDF form. Optionally, choose a starting page for both
the source and destination PDFs. By default, it will remove any existing annotations (which include form fields)
in the destination PDF. If you wish to append annotations instead, specify `append_fields = True`

#### get\_textboxes\_in\_pdf

```python
def get_textboxes_in_pdf(in_file: Union[str, Path, BinaryIO],
                         line_margin=0.02,
                         char_margin=2.0) -> List[List[Textbox]]
```

Gets all of the text boxes found by pdfminer in a PDF, as well as their bounding boxes

#### get\_bracket\_chars\_in\_pdf

```python
def get_bracket_chars_in_pdf(in_file: Union[str, Path, BinaryIO],
                             line_margin=0.02,
                             char_margin=0.0) -> List
```

Gets all of the bracket characters (&#x27;[&#x27; and &#x27;]&#x27;) found by pdfminer in a PDF, as well as their bounding boxes
TODO: Will eventually be used to find [ ] as checkboxes, but right now we can&#x27;t tell the difference between [ ] and [i].
This simply gets all of the brackets, and the characters of [hi] in a PDF and [ ] are the exact same distance apart.
Currently going with just &quot;[hi]&quot; doesn&#x27;t happen, let&#x27;s hope that assumption holds.

#### intersect\_bbox

```python
def intersect_bbox(bbox_a, bbox_b, vert_dilation=2, horiz_dilation=2) -> bool
```

bboxes are [left edge, bottom edge, horizontal length, vertical length]

#### intersect\_bboxs

```python
def intersect_bboxs(bbox_a,
                    bboxes,
                    vert_dilation=2,
                    horiz_dilation=2) -> Iterable[bool]
```

Returns an iterable of booleans, one of each of the input bboxes, true if it collides with bbox_a

#### contain\_boxes

```python
def contain_boxes(bbox_a: BoundingBoxF, bbox_b: BoundingBoxF) -> BoundingBoxF
```

Given two bounding boxes, return a single bounding box that contains both of them.

#### get\_dist\_sq

```python
def get_dist_sq(point_a: XYPair, point_b: XYPair) -> float
```

returns the distance squared between two points. Faster than the true euclidean dist

#### get\_dist

```python
def get_dist(point_a: XYPair, point_b: XYPair) -> float
```

euclidean (L^2 norm) distance between two points

#### get\_connected\_edges

```python
def get_connected_edges(point: XYPair, point_list: Sequence)
```

point list is always ordered clockwise from the bottom left,
i.e. bottom left, top left, top right, bottom right

#### bbox\_distance

```python
def bbox_distance(
    bbox_a: BoundingBoxF, bbox_b: BoundingBoxF
) -> Tuple[float, Tuple[XYPair, XYPair], Tuple[XYPair, XYPair]]
```

Gets our specific &quot;distance measure&quot; between two different bounding boxes.
This distance is roughly the sum of the horizontal and vertical difference in alignment of
the closest shared field-bounding box edge. We are trying to find which, given a list of text boxes
around a field, is the most likely to be the actual text label for the PDF field.

bboxes are 4 floats, x, y, width and height

#### get\_possible\_checkboxes

```python
def get_possible_checkboxes(img: Union[str, cv2.Mat],
                            find_small=False) -> Union[np.ndarray, List]
```

Uses boxdetect library to determine if there are checkboxes on an image of a PDF page.
Assumes the checkbox is square.

find_small: if true, finds smaller checkboxes. Sometimes will &quot;find&quot; a checkbox in letters,
like O and D, if the font is too small

#### get\_possible\_radios

```python
def get_possible_radios(img: Union[str, BinaryIO, cv2.Mat])
```

Even though it&#x27;s called &quot;radios&quot;, it just gets things shaped like circles, not
doing any semantic analysis yet.

#### get\_possible\_text\_fields

```python
def get_possible_text_fields(
        img: Union[str, BinaryIO, cv2.Mat],
        text_lines: List[Textbox],
        default_line_height: int = 44) -> List[Tuple[BoundingBox, int]]
```

Uses openCV to attempt to find places where a PDF could expect an input text field.

Caveats so far: only considers straight, normal horizonal lines that don&#x27;t touch any vertical lines as fields
Won&#x27;t find field inputs as boxes

default_line_height: the default height (16 pt), in pixels (at 200 dpi), which is 45

#### auto\_add\_fields

```python
def auto_add_fields(in_pdf_file: Union[str, Path], out_pdf_file: Union[str,
                                                                       Path])
```

Uses `get_possible_fields` and `set_fields` to automatically add new fields
to an input PDF.

