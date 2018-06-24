# Philosophy

Understanding the philosophy of Materialish can help you to use it successfully.

## Visual Components

Materialish's goal is to provide **visual components** with a Material Design-like
appearance.

What this means is that it is not always the case that the components will provide all
of the **interactions** that you need.

For example, the modals in Materialish do not include features such as
scroll locking, animations, focus trapping, or fixed positioning. This is
an intentional omission.

There are a few reasons for Materialish's focus on visual components.

One reason is **longevity**. New patterns and APIs frequently emerge in the React
ecosystem that provide improved solutions to old problems. By separating out the visual components
from the currently trending implementation pattern, we hope to increase the lifespan of
the library.

A second reason is **flexibility**. Different applications have different needs that require
different implementations. Consider dropdown menus. It would be impossible for us to provide
a single functional dropdown, or even a collection of functional dropdowns, that solve the needs of
every application out there.

What we can do is provide a common visual languages for a wide variety of dropdowns. With these
visual components, you can implement the dropdown however you want without needing to start
from scratch entirely.

We recognize that you cannot build an application without interactions, and that there are some interactions
that are common among many apps. Our goal is to provide guides and examples that demonstrate how to add
these common interactions to Materialish components.

Keep in mind that these guides do not exist yet, which should factor into your decision to use
Materialish or another solution.

## Visual Design Sources

Materialish's visual design is influenced by several sources:

1.  the official Material Design guidelines
2.  Netflix's internal, informal, evolving Material-like style guide
3.  Netflix's internal, nascent Quasar styleguide
4.  The authors' own preferences

Materialish visual language is dynamic, and will continue to change and adapt as time goes on.

## Customization

Theming and extensive customization of the visual language of Materialish components is not a design
consideration of the library. The library does support "basic" adjustments, such as the primary color,
base font size, sizing, and font, but you will fight the library if you intend to change things
too drastically.

If the out-of-the-box visual appearance of Materialish does not work for your use case, then it may
not be the right solution for you.

## Implementation

Materialish is meant to be **lightweight** and **unopinionated**. If your application can render
React components and load CSS files, then you should be able to use Materialish.

For CSS, Materialish uses "plain" CSS with a [BEM](http://getbem.com/) class naming convention to
reduce the likelihood of collisions. Whenever possible, we strive to keep the specificity of selectors
low so that you can more easily override styles when needed.

## Browser Support

Materialish is built for internal tools at Netflix, which affords us the ability to target newer
browsers only.

If you need to support older, or legacy browsers, then Materialish may not be for you.
