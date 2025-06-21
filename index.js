document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const addMedButton = document.getElementById('addMedButton');
    const addMedModal = document.getElementById('addMedModal');
    const closeModalButton = document.getElementById('closeModalButton');
    const medicationForm = document.getElementById('medicationForm');
    const medDetailModal = document.getElementById('medDetailModal');
    const medicationsList = document.getElementById('medicationsList');
    const activeMedsCount = document.getElementById('activeMedsCount');
    const todayDosesCount = document.getElementById('todayDosesCount');
    const missedDosesCount = document.getElementById('missedDosesCount');
    const medFrequency = document.getElementById('medFrequency');
    const timesContainer = document.getElementById('timesContainer');
    const addTimeButton = document.getElementById('addTimeButton');
    const takeDoseButton = document.getElementById('takeDoseButton');
    const editMedButton = document.getElementById('editMedButton');
    const deleteMedButton = document.getElementById('deleteMedButton');
    const closeDetailModalButton = document.getElementById('closeDetailModalButton');

    // State
    let medications = JSON.parse(localStorage.getItem('medications')) || [];
    let selectedMedication = null;

    // Initialize the app
    init();

    function init() {
        setupEventListeners();
        renderMedications();
        updateStats();
    }

    function setupEventListeners() {
        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);

        //
