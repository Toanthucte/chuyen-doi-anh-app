document.addEventListener('DOMContentLoaded', () => {
    const imageLoader = document.getElementById('imageLoader');
    const imagePreview = document.getElementById('imagePreview');
    const sizeSelector = document.getElementById('sizeSelector');
    const customSizeContainer = document.getElementById('customSizeContainer');
    const customWidthInput = document.getElementById('customWidth');
    const customHeightInput = document.getElementById('customHeight');
    const formatSelector = document.getElementById('formatSelector');
    const convertBtn = document.getElementById('convertBtn');
    const downloadLink = document.getElementById('downloadLink');

    let originalImage = null;
    let originalFileName = '';

    // Handle image upload
    imageLoader.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            originalFileName = file.name.split('.').slice(0, -1).join('.');
            const reader = new FileReader();
            reader.onload = (event) => {
                imagePreview.src = event.target.result;
                imagePreview.classList.remove('hidden');
                originalImage = new Image();
                originalImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Show/hide custom size inputs
    sizeSelector.addEventListener('change', () => {
        if (sizeSelector.value === 'custom') {
            customSizeContainer.classList.remove('hidden');
        } else {
            customSizeContainer.classList.add('hidden');
        }
    });

    // Handle conversion
    convertBtn.addEventListener('click', () => {
        if (!originalImage) {
            alert('Vui lòng chọn ảnh trước!');
            return;
        }

        let width, height;
        const sizeValue = sizeSelector.value;

        if (sizeValue === 'original') {
            width = originalImage.naturalWidth;
            height = originalImage.naturalHeight;
        } else if (sizeValue === 'custom') {
            width = parseInt(customWidthInput.value, 10);
            height = parseInt(customHeightInput.value, 10);
            if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
                alert('Vui lòng nhập kích thước hợp lệ!');
                return;
            }
        } else {
            [width, height] = sizeValue.split('x').map(Number);
        }

        const format = formatSelector.value;
        const mimeType = `image/${format}`;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw image on canvas with new dimensions
        ctx.drawImage(originalImage, 0, 0, width, height);

        // Get data URL and trigger download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = `${originalFileName}_${width}x${height}.${format}`;
            downloadLink.textContent = `Tải về ảnh (${width}x${height}.${format})`;
            downloadLink.classList.remove('hidden');
        }, mimeType, 1); // The '1' is for quality (for JPEG/WEBP)
    });

    // Drag and drop functionality
    const uploadContainer = document.querySelector('.upload-container');

    uploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadContainer.style.backgroundColor = '#e9f5ff';
    });

    uploadContainer.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadContainer.style.backgroundColor = 'transparent';
    });

    uploadContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadContainer.style.backgroundColor = 'transparent';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            imageLoader.files = files;
            // Manually trigger the change event
            const event = new Event('change');
            imageLoader.dispatchEvent(event);
        }
    });

    // Modal functionality
    const infoIcon = document.getElementById('infoIcon');
    const infoModal = document.getElementById('infoModal');
    const closeModal = document.querySelector('.modal-close');

    infoIcon.addEventListener('click', () => {
        infoModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        infoModal.classList.add('hidden');
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.classList.add('hidden');
        }
    });
});
