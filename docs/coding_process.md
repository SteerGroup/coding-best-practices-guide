# The Coding Process

Effective coding, even for small programming tasks, requires much more than just
writing code. This section presents an overview of the coding process and offers
some advice to help you navigate it as smoothly as possible.

## Before Coding

Okay, you've just finished up an intro to coding class, and you're ready to show
off your new skills. Now that your project manager assigned you your first
coding task, it's time to dive head-first into coding, right? Well, it
depends...

A programmer's natural instinct is often to jump in and start writing code. This
is great for getting a feel for input data or trying out a few approaches to a
particularly tricky aspect of your project, but it's generally better not to let
the code you write as you're exploring balloon into what ends up being your
final code. If you go this route, save your exploratory code in a temporary
file, start from scratch, and bring in pieces of it as appropriate,
[refactoring](refactoring.md) as necessary.

Whether or not you write exploratory code, there are several things you should
do before you get too far along in the process:

* Take some time to set up a good
  [development environment](tools.md#text-editors-ides) and get comfortable with
  it—this will pay off several times over in the long run. You of course won't
  have to do this at the beginning of every project, but it's not necessarily
  just a one-time activity either, since you'll probably want to play around
  with different options and modify your setup from time to time.
* Scope and specify your project/task. Ask yourself questions like: "What
  problem are you trying to solve?," "What data are you using?," "What outputs
  are you looking to produce?", etc. Asking and answering questions like these
  early on will help you to focus your efforts.
* Determine the best [language(s)](languages.md) and [tools](tools.md) for the
  job. The best tools may depend on several factors, including the nature of the
  task, the data you're working with, your experience and that of others on your
  project team, client requirements, etc. After weighing the various factors,
  you may decide the best approach is actually to use Excel or GIS software.
* If coding collaboratively, agree on conventions for components like
  [documentation](documentation.md) and [testing](testing.md), what type of
  [database](data.md#databases) to use, which package to use for visualization,
  etc.
* Design your analysis at a high level, but don't try to plan out every single
  function or line of code. Understand that you're never going to end up with
  exactly what you planned out, and this is okay (and maybe even a good thing).
* Break your approach down into [modules](code_structure.md#modularity) where
  possible, and think about whether some of the modules might already exist,
  either in other code at Steer, or in a publicly available package. Good
  programmers tend to be effectively lazy and "stand on the shoulders of giants"
  when possible—why reinvent the wheel if you don't have to?
* Think about [reuse in other applications](code_structure.md#portability) and
  design with this in mind. Be someone else's giant!

::: tip NOTE

You might have noticed some similarities with the early stages of the Steer SMBP
process (Scope/Specify, Design, Build, Test). Just be warned that the
design/build/test steps in coding are typically more iterative and overlapping.

:::

## While Coding

Finally, after all that prep, the real fun begins. This is where you get to do
your magic!

We'll keep this section short, because it's the focus of most of this guide, but
while you're coding, there are several important things to keep in mind:

* Be prepared to revisit your design. As mentioned in the previous section, your
  final product is never going to end up exactly matching your original plan.
* Be consistent in your [coding style](code_style.md) and
  [structure](code_structure.md), both within your own code and also as much as
  possible with others at Steer.
* At the risk of being redundant, always be thinking about how you can make your
  code easier to adapt for other uses. Chances are someone else is trying to
  solve a similar problem or develop a similar application.

If you're coding collaboratively, you'll also want to make sure you're
committing code changes frequently and having regular conversations with your
collaborators to make sure everyone remains on the same page throughout the
project.

## After Coding

After days/weeks/months of hacking, debugging, dealing with changing
requirements, etc., you've finally got your code working as intended. Time to
declare victory and celebrate, right?...

Not so fast—chances are your code is a complicated mess that only you (but not
even future you) can understand. This is where
[quality assurance](quality_assurance.md), [refactoring](refactoring.md), and
[documentation](documentation.md), and come in. These efforts are essential to
writing code that does what it's supposed to do and is usable by others, and you
should always plan to spend considerable time on them.

## Note to Managers

If you are managing a project or task with a coding component, please budget
sufficient time for refactoring and documentation of code if at all possible.
Skipping or rushing these activities leads to less-readable, poorly documented
code that is much harder to reuse, both in the future on the same project and on
other projects.
