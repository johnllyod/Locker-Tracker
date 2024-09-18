function FillLockerList(maxRowLocker, rowCount){
    const lockerList = document.getElementById("LockerList");
    const lockerRange = document.getElementById("LockerRange");
    let lockerCount = 0;

    // Checking if LockerList exist
    if (lockerList)
    {
        for(let i = 0; i < rowCount; i++)
        {
            const rowLocker = document.createElement("div");
            rowLocker.classList = "row";
            for(let y = 0; y < maxRowLocker; y++)
            {
                lockerCount++;
                rowLocker.innerHTML += `<button class="col btn-locker" onclick="LockerSelected(${lockerCount})"><div><p>${lockerCount}</p></div></button>`;
                lockerList.append(rowLocker);
            }
        }
        let maxLockerCount = String((maxRowLocker * rowCount));     // Get Max locker count
        let padding = new Array(3 - maxLockerCount.length +         // Zero's to put infront of locker # for display purposes
            1).join('0');
        let paddedCount = padding + maxLockerCount;                 // Combine padding and max locker count
        console.log(padding);
        lockerRange.innerHTML = "Locker # 001 - " + paddedCount;
    }
}