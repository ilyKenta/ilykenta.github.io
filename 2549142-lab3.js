const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
  ];


function getMusicTitlesByYear(tracks)
{
    if(!Array.isArray(tracks))
    {
        throw new TypeError("Object is not an array");
    }
    if(tracks.length < 1)
    {
        throw new TypeError("Array is empty");
    }

    let music = {};

    for (let t of tracks) {
        if(track.title == undefined)
        {
            throw new TypeError("title is not a key in given object");
        }
        if(track.artist == undefined)
        {
            throw new TypeError("artisit is not a key in given object");
        }
        if(track.year == undefined)
        {
            throw new TypeError("year is not a key in given object");
        }
        if(typeof track.title != "string")
        {
            throw new TypeError("title is not a string");
        }
        if(typeof track.artist != "string")
        {
            throw new TypeError("artisit is not a string");
        }
        if(typeof track.year != "number")
        {
            throw new TypeError("year is not given as a number");
        }

    
        if (music[t.year] == undefined) music[t.year] = [];

        music[t.year].push(t.title);
        music[t.year].sort();
    }
    
    return music;
}

MediaSourceHandle.export={getMusicTitlesByYear}