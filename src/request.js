import blacklist from "./images/blacklist.jpg"
import ginnywedssunny from './images/ginnywedssunny.jpg'; 
import paranormal from './images/paranormal.jpg';
import spartacus from './images/spartacus.jpg';
import uncutgem from './images/uncutgem.jpg';
import irishman from './images/irishman.jpg';
import marriagestory from './images/marriagestory.jpg';
import spiderman from './images/spiderman.jpg';
import roma from './images/roma.jpg';
import theoutpost from './images/theoutpost.jpg';
import thetown from "./images/thetown.jpg";
import themaster from './images/themaster.jpg';
import gunjan from './images/gunjan.jpg';
import dangal from './images/dangal.jpg';
import kabir from './images/kabir.jpg';
import raatakeli from './images/raatakeli.jpg';
import saaho from './images/saaho.jpg';
import lust from './images/lust.jpg';


const requests = {
    fetchMovieBuzzOriginals: {
      names: ['BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS','Roma','Uncut Gem','Raat Akelli', 'Saaho', 'Lust Stories','The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master'],
      images: [blacklist, ginnywedssunny, paranormal, spartacus,roma,uncutgem,raatakeli,saaho,lust,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster],
    },
    fetchTrending: {
        names: ['Uncut Gems', 'The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master','BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS'],
        images: [uncutgem,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster,blacklist, ginnywedssunny, paranormal, spartacus]
    },
    fetchIndianMovies: {
        names: ['Gungan Saxena', 'Dangal', 'Kabir Singh', 'Raat Akelli', 'Saaho', 'Lust Stories','GINNY WEDS SUNNY', 'PARANORMAL','Uncut Gems', 'The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master','BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS'],
        images: [gunjan,dangal,kabir,raatakeli,saaho,lust, ginnywedssunny, paranormal,uncutgem,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster,blacklist, ginnywedssunny, paranormal, spartacus]
    },
    fetchTopRated: {
        names: ['Lust Stories','Marriage Story','GINNY WEDS SUNNY','Uncut Gems','SPARTACUS','Roma','Raat Akelli', 'Saaho','BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS','Roma','Uncut Gem','Raat Akelli', 'Saaho', 'Lust Stories','The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master'],
        images: [lust,marriagestory,ginnywedssunny,uncutgem,spartacus,roma,raatakeli,saaho,blacklist, ginnywedssunny, paranormal, spartacus,roma,uncutgem,raatakeli,saaho,lust,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster]
    },
    fetchActionMovies: {
        names: ['Dangal','Saaho','Spider-Man:Into the Spider-Verse', 'The Irishman','Uncut Gems','BLACKLIST','PARANORMAL', 'SPARTACUS','Roma','Uncut Gems', 'The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master','BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS'],
        images: [dangal,saaho,spiderman,irishman,uncutgem,blacklist,paranormal,spartacus,roma,uncutgem,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster,blacklist, ginnywedssunny, paranormal, spartacus]
    },
    fetchComedyMovies: {
        names: ['BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS','Roma','Uncut Gem','Raat Akelli', 'Saaho', 'Lust Stories','The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master'],
        images: [blacklist, ginnywedssunny, paranormal, spartacus,roma,uncutgem,raatakeli,saaho,lust,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster],
        },
    fetchHorrorMovies: {
        names: ['Uncut Gems', 'The Irishman', 'Marriage Story', 'Spider-Man:Into the Spider-Verse', 'Roma', 'The Outpost', 'The Town', 'The Master','BLACKLIST', 'GINNY WEDS SUNNY', 'PARANORMAL', 'SPARTACUS'],
        images: [uncutgem,irishman,marriagestory,spiderman,roma,theoutpost,thetown,themaster,blacklist, ginnywedssunny, paranormal, spartacus]
    }
  };

export default requests;