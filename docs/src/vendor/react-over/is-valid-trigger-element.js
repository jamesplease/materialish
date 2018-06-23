// Trigger elements need to be regular nodes like <div> or <p>.
export default function isValidTriggerElement(element) {
  return element && (element.nodeType === 1 || element === window);
}
