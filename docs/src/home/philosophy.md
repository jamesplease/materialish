# Philosophy

Understanding the philosophy of Materialish can help you to use it successfully.

## Visual Components

Materialish's goal is to provide **visual components** with a Material Design-like
appearance.

What this means is that it is not always the case that the components will provide all
of the **interactions** that you need.

For example, the modals in Materialish do not include features such as scroll locking, animations,
focus trapping, or fixed positioning. This is an intentional omission, and there are several reasons
for Materialish's focus on visual components.

One reason is **longevity**. New patterns and APIs frequently emerge in the React
ecosystem that provide improved solutions to old problems. By separating out the visual components
from trending implementation patterns, we hope to increase the library's lifespan.

A second reason is **flexibility**. The unique requirements of applications often necessitate
specific implementation details that can be difficult to abstract. Consider dropdown menus. It would be
impossible for Materialish to provide a single functional dropdown, or even a collection of functional dropdowns,
that solve the needs of every application out there.

What Materialish can (and does) do is provide a common visual languages to support the wide variety of
interactions you see in components like dropdowns. With these visual components, you can add interactions to a
dropdown as needed. You may recognize the value in separating these distinct concerns if you have ever struggled
to change the interaction of a component that provides interactions for you.

We recognize that you cannot build an application without interactions, and we plan to provide guides and examples
that demonstrate how to add common interactions to Materialish components, but they do not exist at this time.

Generally, our preferred method for introducing interactions is through **render prop components** that do not
render to the DOM themelves. One example is the [Downshift](https://github.com/paypal/downshift) library, which is
a great solution to implement dropdowns and autocompletes.

## Visual Design Sources

Materialish's visual design is influenced by several sources:

1.  the official Material Design guidelines
2.  Netflix's internal, nascent Quasar styleguide
3.  The authors' own preferences

Materialish visual language is dynamic, and will continue to change and adapt as time goes on.

## Customization

Theming and extensive customization of the visual language of Materialish components is not a design
consideration of the library. Although the library supports "basic" adjustments, such as the primary color,
base font size, sizing, and font, you will fight the library if you attempt to make more drastic changes to
the visual appearance of the components.

If the out-of-the-box visual appearance of Materialish does not align with your requirements, then it
may not be the right solution for your project.

## Implementation

Materialish is meant to be **lightweight** and **unopinionated**. You should be able to use Materialish
as long as your application can render React components and load CSS files.

When it comes to CSS, Materialish uses "plain" CSS with a [BEM](http://getbem.com/) class naming convention to
reduce the likelihood of collisions. Whenever possible, we strive to keep the specificity of selectors
low so that you can more easily override styles when needed.

The authors recognize the growing popularity of CSS-in-JS, so we feel the need to add a note about our decision
to _not_ use CSS-in-JS.

Most importantly, we do not believe that using CSS-in-JS would have provided any value over using "plain" CSS,
given the project's design goals.

Secondly, different CSS-in-JS libraries have different APIs. Choosing any one library increases the overall
learning curve of Materialish if we were to to expose that API publicly.

Thirdly, the CSS-in-JS space is evolving rapidly. There is no way to know which library will win the overall market share
over the next few years, so we believe it is a risk to adopt any one library at this time.

By implementing Materialish using plain CSS, we feel that the library is more likely to remain useful for a longer period
of time, have fewer major refactors, and without any API or feature tradeoffs.

## Browser Support

Materialish is built for internal applications at Netflix, which affords us the ability to target newer
browsers only.

If your project requires support for older, or legacy browsers, then Materialish may not be the right solution.
