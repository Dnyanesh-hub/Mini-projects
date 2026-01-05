const quotes = [
  "Honesty is the best policy",
  "Hard work beats talent",
  "Discipline creates freedom",
  "Consistency is the key to success",
  "Believe in yourself",
  "Dream big, work bigger",
  "Success is earned, not given",
  "Focus on progress, not perfection",
  "Small steps lead to big results",
  "Stay hungry, stay foolish",
  "Failure is part of success",
  "Confidence comes from preparation",
  "Do it with passion or not at all",
  "Your future depends on what you do today",
  "Learn continuously, grow endlessly",
  "Patience is power",
  "Action creates results",
  "Work silently, let success speak",
  "Never stop improving yourself",
  "Stay disciplined, stay unstoppable"
];
// accessing the button or taking acces of the button
const button=document.querySelector('button');
// we have to change the quote that is present in h1 element so we need to selcect it \
const quote=document.querySelector('h1');
button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*(20-0)+0)
    quote.textContent=quotes[index];

})
