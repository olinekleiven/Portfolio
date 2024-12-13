// Function to save the state of checkboxes
function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

// Function to load the state of checkboxes
function loadCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const checked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = checked;
    });
}

// Load the state when the page loads
window.onload = loadCheckboxState;

// Save the state whenever a checkbox is clicked
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
});

// Use querySelector to target the button by its class
document.querySelector('.nullstill').addEventListener('click', function() {
    // Finn alle checkbox-elementer
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Sett alle checkboxer til ikke merket (unchecked)
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        // Fjern fra localStorage
        localStorage.removeItem(checkbox.id);
    });
});
