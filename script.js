// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");

// Ensure the sidebar is closed by default and hoverable
sidebar.classList.add("close");
sidebar.classList.add("hoverable");

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  sidebar.classList.add("close");
};

// Function to show the sidebar when the mouse enters
const showSidebar = () => {
  sidebar.classList.remove("close");
};

// Function to show and hide the sidebar when using toggle button (if needed)
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// Close the sidebar and remove locking features for smaller screens
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to sidebar for hover functionality
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);





// Toggle the visibility of the dropdown content
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("active");

  // Rotate the arrow icon
  const arrow = dropdown.previousElementSibling.querySelector(".arrow");
  arrow.style.transform = dropdown.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)";
}

// Update the selected count based on checkboxes
function updateCount() {
  const checkboxes = document.querySelectorAll('#dropdown1 input[type="checkbox"]');
  const selectedCount = document.getElementById("selectedCount");
  let count = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) count++;
  });
  selectedCount.textContent = count;
}

// Clear all checkboxes
function clearAll() {
  const checkboxes = document.querySelectorAll('#dropdown1 input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  updateCount();
}
