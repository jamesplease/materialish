# Philosophy

Understanding the philosophy of Materialish can help you to use it successfully.

## Visual Components

Materialish's goal is to provide **visual components** with a Material Design-like
appearance.

What this means is that it is not always the case that the components will provide all
of the **interactions** that you need.

For example, the modals in Materialish do not include features such as
scroll locking, animations, focus trapping, or fixed positioning.

This is an intentional omission, and there are several reasons for Materialish's focus on
visual components.

One reason is **longevity**. New patterns and APIs frequently emerge in the React
ecosystem that provide improved solutions to old problems. By separating out the visual components
from trending implementation patterns, we hope to increase the lifespan of the library.

A second reason is **flexibility**. The requirements of different applications frequently require
unique implementation details that can be difficult to abstract. Consider dropdown menus. It would be
impossible for us to provide a single functional dropdown, or even a collection of functional dropdowns,
that solve the needs of every application out there.

What Materialish can do (and does do) is provide a common visual languages for a wide variety of dropdowns.
With these visual components, you can implement the dropdown however you want without needing to start
from scratch entirely.

We recognize that you cannot build an application without interactions. Our goal is to provide guides and examples
that demonstrate how to add common interactions to Materialish components. These guides do not exist yet, so keep
that in mind if you are thinking of using Materialish.

## Visual Design Sources

Materialish's visual design is influenced by several sources:

1.  the official Material Design guidelines
2.  Netflix's internal, informal, evolving Material-like guidelines
3.  Netflix's internal, nascent Quasar styleguide
4.  The authors' own preferences

Materialish visual language is dynamic, and will continue to change and adapt as time goes on.

## Customization

Theming and extensive customization of the visual language of Materialish components is not a design
consideration of the library. Although the library supports "basic" adjustments, such as the primary color,
base font size, sizing, and font, you will fight the library if you attempt to make larger changes to
the visual appearance of the components.

If the out-of-the-box visual appearance of Materialish does not align with your requirements, then Materialish
may not be the right solution for your project.

## Implementation

Materialish is meant to be **lightweight** and **unopinionated**. You should be able to use Materialish
as long as your application can render React components and load CSS files.

When it comes to CSS, Materialish uses "plain" CSS with a [BEM](http://getbem.com/) class naming convention to
reduce the likelihood of collisions. Whenever possible, we strive to keep the specificity of selectors
low so that you can more easily override styles when needed.

## Browser Support

Materialish is built for internal applications at Netflix, which affords us the ability to target newer
browsers only.

If your project requires support for older, or legacy browsers, then Materialish may not be the right solution
for it.
