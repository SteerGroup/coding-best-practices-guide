# Introduction

Welcome to the Steer Coding Best Practices Guide! Whether you're completely new
to coding or a seasoned pro, this guide is intended to provide information and
resources that will help you and your Steer colleagues to write better, more
consistent code and to collaborate more effectively on coding projects.

This guide is intended to complement the ongoing Coding at Steer series of
training sessions. Past sessions can be viewed
[here](https://sdg.eloomi.com/learning/programs/80), and more sessions are on
the way!

## Context

As data sets get larger and are updated more frequently, some of our legacy
tools are often being pushed to their limits. At the same time, our competitors
have built up considerable programming skills, and we need to keep pace to stay
relevant. Many at Steer have learned some programming elsewhere, whether in
school, at a previous employer, or via self-directed learning, but until
recently, there has been no consistent approach to developing coding skills or
supporting those doing coding at Steer.

This guide is part of a larger effort to develop a consistent approach to coding
at Steer and to provide those who wish to learn the resources to do so. Besides,
writing good code is hard (see the xkcd comic below), and we're hoping this
effort will make it a bit smoother!

![xkcd: Good Code](https://imgs.xkcd.com/comics/good_code.png)  
source: [xkcd.com](https://xkcd.com/844)

## Coding at Steer

At Steer, programming is used for the following three primary purposes:

* **data analysis**: the processing of data, often involving synthesis of data
  from multiple sources. Common outputs include tabular data, visualizations,
  and inputs to travel models or other analyses.
* **local development**: can range from small internal utilities to applications
  developed for use by external parties. Code is run on a laptop or workstation
  (and not on a server).
* **web development**: development of browser-based applications, which can vary
  widely in scale. Involves server-side code that runs on a server and
  client-side code that is delivered to users and run in their browsers.

These use cases have much in common, but often require different tools and
approaches. This guide attempts to address all of these use cases throughout,
with most of the emphasis placed on data analysis and local development. If
you're doing web development, be sure to check out the
[Steer Digital Guide](https://guide.steer-digital.com) for lots of great
information.

Other Steer coding resources include the following:

* [Coding at Steer Learning and Development training series](http://sdg.eloomi.com/learning/programs/80)
* [Steer Coders on Teams](https://teams.microsoft.com/l/team/19:3590ab8701d343d59f8e6d563ffa4314@thread.tacv2/conversations?groupId=e20e9c13-bb7c-4b5d-b55d-98a59893147c&tenantId=c1eae432-c4d1-41b4-998c-de12d49f7913)
  (if you're not currently a member, but would like to join, please email
  [Andrew Desautels](mailto:andrew.desautels@steergroup.com) or
  [Lucile Kellis](mailto:lucile.kellis@steergroup.com))
* Data science monthly calls (email
  [Lucile Kellis](mailto:lucile.kellis@steergroup.com) for more information)

## Objectives

The specific objectives of this guide are to:

* Help you write better, more readable code.
* Help you minimize errors in your code.
* Encourage consistency in code style across Steer.
* Encourage creativity in your programming.

## How to use this Guide

There is no single best way to use this guide, so feel free to read through the
whole document, skim through reading only sections of interest, or use the
search box to find information on specific topics.

Note the following:

* The guide focuses on high-level principles, and is written primarily for a
  beginner-level audience, though intermediate and advanced coders should find
  something useful.
* Where code samples are provided, Python, R, and JavaScript versions are
  included. In some cases where concepts are not language-specific, pseudocode
  is used.
* The guide is not intended to explicitly address coding within commercial
  travel demand modeling software, such as Cube and TransCAD, though most of the
  code and process-specific best practices still apply.

Finally, treat the recommendations in this document as guidelines, not hard and
fast rules. Coding is inherently creative, and once in a while you'll need to
break the rules. This expected and even encouraged!

## About this Guide

This guide is intended to be a living document that will evolve over time to
reflect changes in available/preferred tools and changes in the business needs
of Steer. If you have any suggestions for improving the guide, please contact
[Andrew Desautels](mailto:andrew.desautels@steergroup.com).
