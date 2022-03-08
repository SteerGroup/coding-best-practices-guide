# Development Tools

This section highlights a selection of recommended development tools for common
coding activities at Steer.

It's important to note that development tools are a matter of personal
preference, so take the time to try out different tools and play with various
settings to find what works for you. Once you've found a set of tools you're
comfortable with and configured them appropriately, you'll have a head start on
each new coding project.

## Text Editors/IDEs

Computer code is written in plain text, which means it has no embedded styles,
formatting, links, etc. This makes code easy to read and edit across virtually
any platform, while also being lightweight and easy to share. This means you can
view and edit the source code for even an extremely complex piece of software in
a lightweight application like Notepad.

However, if you're writing code in Notepad or even Notepad++, better days are
here. Modern text editors typically double as integrated development
environments (or IDEs) which allow users to run and debug code in the same
application, and provide numerous features to make coding easier and more
efficient, from syntax highlighting, autocompletion, and code snippets to
integrated terminals and version control. Most modern text editors also support
third-party extensions, which enable a virtually unlimited level of
customization.

::: warning
Note that Microsoft Word and other word processors are fundamentally different
from text editors. These applications are often described as WYSIWYG (what you
see is what you get), since the formatting you see on the screen is consistent
with the final document. This is in contrast to text editors used for coding,
which allow users to view and edit the plain text.
::::

Three recommended editors/environments are presented below.

### VS Code

Unless you're coding in R (in which case, see the section below on RStudio),
[VS Code](https://code.visualstudio.com) is highly recommended for just about
any use case. VS Code is open source, free, and backed by Microsoft. It is the
most popular text editor/IDE currently available, and its enormous catalog of
extensions makes it almost infinitely customizable. Other advantages of VS Code
include out-of-the-box Git integration, integrated debugging tools, and advanced
code completion.

::: tip
If you don't know the keyboard shortcut or where to find a command in VS Code's
menus (or don't know if a command exists), activate the Command Palette using
Ctrl-Shift-P, and start typing what you're looking for. You can then perform the
command by selecting it from the list of results, which also includes keyboard
shortcuts so you can access the command even quicker next time.  
:::

### RStudio

If you're coding in R, using the
[RStudio IDE](https://www.rstudio.com/products/rstudio/) is a no-brainer. It
includes just about everything you could ever want—a console,
syntax-highlighting editor that supports direct code execution, Git integration,
as well as tools for plotting, history, debugging and workspace management—all
customized for R. RStudio does support third-party extensions, but the quantity
and capabilities of these extensions are much less than for VS Code.

::: tip
RStudio also publishes a great set of R cheat sheets covering a wide range of R
topics. These can be accessed directly from RStudio's menu under Help >
Cheatsheets, or on the
[RStudio website](https://www.rstudio.com/resources/cheatsheets/https://www.rstudio.com/resources/cheatsheets/).
:::

### Jupyter Notebook

[Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/latest/) is a
browser-based environment primarily used with Python for data science purposes.
In a Jupyter Notebook, code (and non-code text) is divided into "cells," and
code cells can be run interactively. Both the code itself and outputs of cells
that have been run are integrated directly into a "notebook" document, which
provides a record of computational inputs and outputs alongside explanatory text
and other components like images and mathematical expressions. This can be quite
useful in cases where users want to produce a single document that essentially
tells a cohesive story of their analysis and includes several outputs along the
way. Note that Jupyter Notebooks are only a viable option for use cases where
code is run interactively.

## Version Control

Virtually all modern software development places its code under version control,
which enables efficient tracking of changes (including when they were made and
by whom), the ability to easily undo unwanted changes, and effective
collaborative coding. The most popular version control system is Git, which is
highly recommended for use in every coding project at Steer. This section
introduces Git and providers of cloud-based source code hosting, including
GitHub.

### Git

[Git](https://git-scm.com/) is a free and open source distributed version
control system designed to handle projects of all sizes efficiently. Under
version control, any changes to a file or set of files over time are recorded so
that you can recall specific versions later. Git also enables multiple users to
work on the same codebase in a managed and transparent way.

Git works by storing the differences between versions of tracked files over time
in a special type of database that can be queried to return the state of any
tracked file at any point in its history. As a user "commits" changes to the
code, the associated information is added to the Git database. On collaborative
projects, the full code repository (including history) is mirrored on each
developer's computer, with "pushing" and "pulling" to/from a shared remote
repository required to keep each developer's copy in sync.

Git also allows you to use multiple "branches," so you can isolate different
sets of code improvements from each other. For example, if in the middle of
working on a new feature, you discover a bug that needs to be fixed immediately,
Git allows you to easily switch to a new branch, fix the bug, and deploy the fix
without having to worry about your bug fix code and your feature code getting
mixed together. When you're done fixing the bug, you can switch back to your
feature branch and continue right where you left off.

When used effectively, Git eliminates the need for file names that end in
version numbers, initials, dates, etc. Git interfaces are also integrated into
some development environments, including VS Code and RStudio.

Git is one of the most important development tools, and it is important that
every coder has at least basic working knowledge of Git. There is a bit of a
learning curve at first, but you will find that it makes coding much easier in
the long run.

For more information on Git, check out the Coding at Steer session on
[Git Basics](https://sdg.eloomi.com/learning/modules/1459/element/892?program=80).

::: tip
Git allows you to define your own aliases, so if there's a command that you
think should exist (e.g. displaying the Git log in a specific format), you can
often create it with minimal effort!
:::

### GitHub

Since Git is a distributed version control system, each user has a local copy of
the repository, as described above. This creates the need for a canonical shared
version of the repository that the developers can use to ensure their
repositories stay in sync. This is where cloud-based source code hosting
services come in. At their core, these services offer hosting of repositories
and the ability to "push" and "pull" changes between the remote repository and
local repositories.

[GitHub](http://github.com) (which despite its name, is not part of Git) is the
preferred cloud provider for Steer projects, and in addition to the core hosting
functionality, it provides tools for reporting and tracking issues, creating
wiki pages for your project, etc. If you ever need to use another provider, such
as BitBucket or GitLab, know that the core services they provide are virtually
identical, though there some differences in supporting features.

To use GitHub, you'll need to create a free GitHub account. Also be sure to join
the [Steer Organization](https://github.com/SteerGroup). To do so, you'll need
to request an invitation from your regional Steer GitHub administrator
([Gayathri Shivaraman](mailto:gayathri.shivaraman@steergroup.com) for North
America, [Alex Mitrani](mailto:alex.mitrani@steergroup.com) for Latin America,
or [Colin Woods](mailto:colin.woods@steergroup.com) for Europe and other
regions).

::: warning
GitHub and other cloud-based source code hosting services are primarily meant
for hosting shared code and not inputs and outputs, especially large data files.
To share data files, use OneDrive or Teams.
:::

If you want to see what a GitHub-hosted repository looks like, check out the
[repository for this guide](https://github.com/SteerGroup/coding-best-practices-guide).
Try
[cloning the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
to your machine and experiment by making changes and committing them to Git.
Once you've become more comfortable with Git, feel free to
[fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo),
make edits, and
[submit a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

## The Command Shell

Another important part of any developer's toolkit is the command shell, which
enables access to your computer's underlying operating system via a command-line
interface, or CLI. Interaction with the command shell can be intimidating at
first since it takes place exclusively via text, but you'll need to become
comfortable with it, since the command shell is used frequently in programming.
As with many development tools, proficiency and comfort will come quickly with
practice.

Many different command shells exist, and two of the most relevant are introduced
below.

### Bash

[Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) is an extremely popular
Unix-style command shell. It is not natively installed on Windows, but a version
called Git Bash is included with the
[Git for Windows](https://gitforwindows.org) distribution. Unix-style command
shells are used for most software development and on the vast majority of
servers, and as a result, most documentation and tutorials you'll find assume a
Unix-style shell. Git Bash is the easiest way to get up and running with a
Unix-style shell on Windows, and is the recommended approach.

::: tip

Persistent Bash preferences can be configured using hidden files named *.bashrc*
and *.bash_profile*.

:::

### PowerShell

[PowerShell](https://docs.microsoft.com/en-us/powershell/) is a
Microsoft-developed command shell that is installed by default on all modern
Windows computers. It is quite capable, and has become more so in recent years,
but uses entirely different commands than Unix-style shells. PowerShell is
recommended if you need a Windows-specific shell, but for other applications,
use Bash instead.
