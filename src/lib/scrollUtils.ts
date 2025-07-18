export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  // If element doesn't exist on current page, navigate to home page first
  if (!element) {
    // Navigate to home page with hash
    window.location.href = `/#${elementId}`;
    return;
  }
  
  // Get the actual header height dynamically
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight: 100;
  const elementPosition = element.offsetTop - headerHeight;
  
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
}; 