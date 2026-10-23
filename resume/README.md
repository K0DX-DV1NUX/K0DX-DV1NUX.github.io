# Resume source

`Aditya_Dey_Resume.docx` is the master CV. It follows the UiO CV template layout (date, role, institution) using tab stops instead of tables, so ATS parsers read it in order.

To update it:

1. Edit `resume/Aditya_Dey_Resume.docx` in Word.
2. Export it as PDF to `assets/pdf/Aditya_Dey_Resume.pdf`, keeping that file name. The site's "Download resume" link serves this PDF.
3. Commit both files. The site redeploys when the change reaches `main`.

This folder is listed under `exclude:` in `_config.yml`, so Jekyll does not publish the .docx.
