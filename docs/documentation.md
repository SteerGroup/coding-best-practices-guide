# Documentation

Like refactoring, taking sufficient time to ensure your code is well-documented
is well worth the effort, and will be much appreciated by the next user of your
code, which again may be you. If you've been writing clean, readable code and
commenting effectively (which you surely will after reading this guide :wink:),
you should already be most of the way there, but you'll probably still need to
fill in some gaps.

As a general rule, once you're finished coding, put yourself in the shoes of
someone who hasn't seen your code before and ask yourself what information they
would need to understand the code starting from zero context (and if possible,
ask someone who actually hasn't seen your code to do the same).

The following additional guidelines apply to specific cases, but not all coding
projects:

* Standalone software that is intended for use by others should include not only
  documentation of the code, but also a user guide that focuses on how to use
  the software, rather than how specific sections of code work.
* If you've created a remote repository on GitHub or another cloud repository,
  be sure it includes a thorough
  [README file](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md).
* If you've written a standalone script, a header with some descriptive comments
  (like the example below) is usually helpful. Note that if you're using Git—and
  you should be!—the created by/updated by information is extraneous.

```
# --------------------
# Project: {project}
# Description: {description}
# Created by {author} on {date}
# Updated by {author} on {date}
# --------------------
```
