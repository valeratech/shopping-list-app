function updateMainHeading(heading) {
    console.log(typeof heading);
    const mainHeading = document.getElementById('main-heading');
    mainHeading.textContent = heading;
}

export default updateMainHeading;