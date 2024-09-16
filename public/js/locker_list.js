function FillLockerList(maxLocker, rowCount){
    const lockerList = document.getElementById("LockerList");
    let lockerCount = 0;

    for(let i = 0; i < maxLocker; i++)
    {
        const rowLocker = document.createElement("div");
        rowLocker.classList = "row";
        for(let y = 0; y < rowCount; y++)
        {
            lockerCount++;
            const colLocker = document.createElement("div");
            const numContainer = document.createElement("div");
            const lockerNum = document.createElement("p");
            lockerNum.innerHTML = lockerCount;
            numContainer.append(lockerNum);
            colLocker.classList = "col";
            colLocker.append(numContainer);
            rowLocker.append(colLocker);
            lockerList.append(rowLocker);
        }
    }
}

FillLockerList(5, 5);