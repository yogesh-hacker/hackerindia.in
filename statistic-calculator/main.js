//Getting user values and arranging them
function myArr(){
    const scores = document.getElementById('scores').value;
    const levelex = document.getElementById('levelex').value;
    const sortscores = scores.split(',');
    const min = Math.min(...sortscores);
    const max = Math.max(...sortscores);
    const slex = (levelex-1);
    
    
    
    const i = document.getElementById("result").rows[1].cells;
    const ii = document.getElementById("result").rows[2].cells;
    const iii = document.getElementById("result").rows[3].cells;
    const iv = document.getElementById("result").rows[4].cells;
    const v = document.getElementById("result").rows[5].cells;
    const vi = document.getElementById("result").rows[6].cells;
    const vii = document.getElementById("result").rows[7].cells;
    const viii = document.getElementById("result").rows[8].cells;
    const ix = document.getElementById("result").rows[9].cells;
    const x = document.getElementById("result").rows[10].cells;
    const xi = document.getElementById("result").rows[11].cells;
    
    
    
    i[0].innerHTML = (min)+" - "+(min+slex);
    ii[0].innerHTML = (min+(slex+1))+" - "+(min+(slex*2)+1);
    iii[0].innerHTML = (min+(slex*2)+2)+" - "+(min+(slex*3)+2);
    iv[0].innerHTML = (min+(slex*3)+3)+" - "+(min+(slex*4)+3);
    v[0].innerHTML = (min+(slex*4)+4)+" - "+(min+(slex*5)+4);
    vi[0].innerHTML = (min+(slex*5)+5)+" - "+(min+(slex*6)+5);
    vii[0].innerHTML = (min+(slex*6)+6)+" - "+(min+(slex*7)+6);
    viii[0].innerHTML = (min+(slex*7)+7)+" - "+(min+(slex*8)+7);
    ix[0].innerHTML = (min+(slex*8)+8)+" - "+(min+(slex*9)+8);
    x[0].innerHTML = (min+(slex*9)+9)+" - "+(min+(slex*10)+9);
    
    
    
    const inumraw = i[0].innerText;
    const iinumraw = ii[0].innerText;
    const iiinumraw = iii[0].innerText;
    const ivnumraw = iv[0].innerText;
    const vnumraw = v[0].innerText;
    const vinumraw = vi[0].innerText;
    const viinumraw = vii[0].innerText;
    const viiinumraw = viii[0].innerText;
    const ixnumraw = ix[0].innerText;
    const xnumraw = x[0].innerText;
    
    
    
    const inums = inumraw.split(' - ');
    const iinums = iinumraw.split(' - ');
    const iiinums = iiinumraw.split(' - ');
    const ivnums = ivnumraw.split(' - ');
    const vnums = vnumraw.split(' - ');
    const vinums = vinumraw.split(' - ');
    const viinums = viinumraw.split(' - ');
    const viiinums = viiinumraw.split(' - ');
    const ixnums = ixnumraw.split(' - ');
    const xnums = xnumraw.split(' - ');
    
    
    
    
    const imin = Math.min(...inums);
    const imax = Math.max(...inums);
    const iimin = Math.min(...iinums);
    const iimax = Math.max(...iinums);
    const iiimin = Math.min(...iiinums);
    const iiimax = Math.max(...iiinums);
    const ivmin = Math.min(...ivnums);
    const ivmax = Math.max(...ivnums);
    const vmin = Math.min(...vnums);
    const vmax = Math.max(...vnums);
    const vimin = Math.min(...vinums);
    const vimax = Math.max(...vinums);
    const viimin = Math.min(...viinums);
    const viimax = Math.max(...viinums);
    const viiimin = Math.min(...viiinums);
    const viiimax = Math.max(...viiinums);
    const ixmin = Math.min(...ixnums);
    const ixmax = Math.max(...ixnums);
    const xmin = Math.min(...xnums);
    const xmax = Math.max(...xnums);
    
    
    
    
    const inumsarr = Array.apply(null, {length: imax + 1}).map(Number.call, Number).slice(imin);
    const iinumsarr = Array.apply(null, {length: iimax + 1}).map(Number.call, Number).slice(iimin);
    const iiinumsarr = Array.apply(null, {length: iiimax + 1}).map(Number.call, Number).slice(iiimin);
    const ivnumsarr = Array.apply(null, {length: ivmax + 1}).map(Number.call, Number).slice(ivmin);
    const vnumsarr = Array.apply(null, {length: vmax + 1}).map(Number.call, Number).slice(vmin);
    const vinumsarr = Array.apply(null, {length: vimax + 1}).map(Number.call, Number).slice(vimin);
    const viinumsarr = Array.apply(null, {length: viimax + 1}).map(Number.call, Number).slice(viimin);
    const viiinumsarr = Array.apply(null, {length: viiimax + 1}).map(Number.call, Number).slice(viiimin);
    const ixnumsarr = Array.apply(null, {length: ixmax + 1}).map(Number.call, Number).slice(ixmin);
    const xnumsarr = Array.apply(null, {length: xmax + 1}).map(Number.call, Number).slice(xmin);
    
    
    
    const inumtostr = inumsarr.toString().split(',');
    const iinumtostr = iinumsarr.toString().split(',');
    const iiinumtostr = iiinumsarr.toString().split(',');
    const ivnumtostr = ivnumsarr.toString().split(',');
    const vnumtostr = vnumsarr.toString().split(',');
    const vinumtostr = vinumsarr.toString().split(',');
    const viinumtostr = viinumsarr.toString().split(',');
    const viiinumtostr = viiinumsarr.toString().split(',');
    const ixnumtostr = ixnumsarr.toString().split(',');
    const xnumtostr = xnumsarr.toString().split(',');
    
    
    const iresult = sortscores.filter(function(val) {return inumtostr.indexOf(val) != -1;}).length;
    const iiresult = sortscores.filter(function(val) {return iinumtostr.indexOf(val) != -1;}).length;
    const iiiresult = sortscores.filter(function(val) {return iiinumtostr.indexOf(val) != -1;}).length;
    const ivresult = sortscores.filter(function(val) {return ivnumtostr.indexOf(val) != -1;}).length;
    const vresult = sortscores.filter(function(val) {return vnumtostr.indexOf(val) != -1;}).length;
    const viresult = sortscores.filter(function(val) {return vinumtostr.indexOf(val) != -1;}).length;
    const viiresult = sortscores.filter(function(val) {return viinumtostr.indexOf(val) != -1;}).length;
    const viiiresult = sortscores.filter(function(val) {return viiinumtostr.indexOf(val) != -1;}).length;
    const ixresult = sortscores.filter(function(val) {return ixnumtostr.indexOf(val) != -1;}).length;
    const xresult = sortscores.filter(function(val) {return xnumtostr.indexOf(val) != -1;}).length;
    
    
    i[2].innerHTML = iresult;
    ii[2].innerHTML = iiresult;
    iii[2].innerHTML = iiiresult;
    iv[2].innerHTML = ivresult;
    v[2].innerHTML = vresult;
    vi[2].innerHTML = viresult;
    vii[2].innerHTML = viiresult;
    viii[2].innerHTML = viiiresult;
    ix[2].innerHTML = ixresult;
    x[2].innerHTML = xresult;
    xi[2].innerHTML = ("N = "+(iresult+iiresult+iiiresult+ivresult+vresult+viresult+viiresult+viiiresult+ixresult+xresult));
    
    
    
    const tally1 = '<i class="fa-solid fa-tally-1"></i>';
    const tally2 = '<i class="fa-solid fa-tally-2"></i>';
    const tally3 = '<i class="fa-solid fa-tally-3"></i>';
    const tally4 = '<i class="fa-solid fa-tally-4"></i>';
    const tally5 = '<i class="fa-solid fa-tally"></i>';
    const tally6 = tally5+tally1;
    const tally7 = tally5+tally2;
    const tally8 = tally5+tally3;
    const tally9 = tally5+tally4;
    const tally10 = tally5+tally5;
    
    
    
    if (i[2].innerHTML === '1'){
        i[1].innerHTML = tally1;
    }
    if (i[2].innerHTML === '2'){
        i[1].innerHTML = tally2;
    }
    if (i[2].innerHTML === '3'){
        i[1].innerHTML = tally3;
    }
    if (i[2].innerHTML === '4'){
        i[1].innerHTML = tally4;
    }
    if (i[2].innerHTML === '5'){
        i[1].innerHTML = tally5;
    }
    if (i[2].innerHTML === '6'){
        i[1].innerHTML = tally6;
    }
    if (i[2].innerHTML === '7'){
        i[1].innerHTML = tally7;
    }
    if (i[2].innerHTML === '8'){
        i[1].innerHTML = tally8;
    }
    if (i[2].innerHTML === '9'){
        i[1].innerHTML = tally9;
    }
    if (i[2].innerHTML === '10'){
        i[1].innerHTML = tally10;
    }
    
    
    
    if (ii[2].innerHTML === '1'){
        ii[1].innerHTML = tally1;
    }
    if (ii[2].innerHTML === '2'){
        ii[1].innerHTML = tally2;
    }
    if (ii[2].innerHTML === '3'){
        ii[1].innerHTML = tally3;
    }
    if (ii[2].innerHTML === '4'){
        ii[1].innerHTML = tally4;
    }
    if (ii[2].innerHTML === '5'){
        ii[1].innerHTML = tally5;
    }
    if (ii[2].innerHTML === '6'){
        ii[1].innerHTML = tally6;
    }
    if (ii[2].innerHTML === '7'){
        ii[1].innerHTML = tally7;
    }
    if (ii[2].innerHTML === '8'){
        ii[1].innerHTML = tally8;
    }
    if (ii[2].innerHTML === '9'){
        ii[1].innerHTML = tally9;
    }
    if (ii[2].innerHTML === '10'){
        ii[1].innerHTML = tally10;
    }
    
    if (iii[2].innerHTML === '1'){
        iii[1].innerHTML = tally1;
    }
    if (iii[2].innerHTML === '2'){
        iii[1].innerHTML = tally2;
    }
    if (iii[2].innerHTML === '3'){
        iii[1].innerHTML = tally3;
    }
    if (iii[2].innerHTML === '4'){
        iii[1].innerHTML = tally4;
    }
    if (iii[2].innerHTML === '5'){
        iii[1].innerHTML = tally5;
    }
    if (iii[2].innerHTML === '6'){
        iii[1].innerHTML = tally6;
    }
    if (iii[2].innerHTML === '7'){
        iii[1].innerHTML = tally7;
    }
    if (iii[2].innerHTML === '8'){
        iii[1].innerHTML = tally8;
    }
    if (iii[2].innerHTML === '9'){
        iii[1].innerHTML = tally9;
    }
    if (iii[2].innerHTML === '10'){
        iii[1].innerHTML = tally10;
    }
    
    if (iv[2].innerHTML === '1'){
        iv[1].innerHTML = tally1;
    }
    if (iv[2].innerHTML === '2'){
        iv[1].innerHTML = tally2;
    }
    if (iv[2].innerHTML === '3'){
        iv[1].innerHTML = tally3;
    }
    if (iv[2].innerHTML === '4'){
        iv[1].innerHTML = tally4;
    }
    if (iv[2].innerHTML === '5'){
        iv[1].innerHTML = tally5;
    }
    if (iv[2].innerHTML === '6'){
        iv[1].innerHTML = tally6;
    }
    if (iv[2].innerHTML === '7'){
        iv[1].innerHTML = tally7;
    }
    if (iv[2].innerHTML === '8'){
        iv[1].innerHTML = tally8;
    }
    if (iv[2].innerHTML === '9'){
        iv[1].innerHTML = tally9;
    }
    if (iv[2].innerHTML === '10'){
        iv[1].innerHTML = tally10;
    }
    
    if (v[2].innerHTML === '1'){
        v[1].innerHTML = tally1;
    }
    if (v[2].innerHTML === '2'){
        v[1].innerHTML = tally2;
    }
    if (v[2].innerHTML === '3'){
        v[1].innerHTML = tally3;
    }
    if (v[2].innerHTML === '4'){
        v[1].innerHTML = tally4;
    }
    if (v[2].innerHTML === '5'){
        v[1].innerHTML = tally5;
    }
    if (v[2].innerHTML === '6'){
        v[1].innerHTML = tally6;
    }
    if (v[2].innerHTML === '7'){
        v[1].innerHTML = tally7;
    }
    if (v[2].innerHTML === '8'){
        v[1].innerHTML = tally8;
    }
    if (v[2].innerHTML === '9'){
        v[1].innerHTML = tally9;
    }
    if (v[2].innerHTML === '10'){
        v[1].innerHTML = tally10;
    }
    
    if (vi[2].innerHTML === '1'){
        vi[1].innerHTML = tally1;
    }
    if (vi[2].innerHTML === '2'){
        vi[1].innerHTML = tally2;
    }
    if (vi[2].innerHTML === '3'){
        vi[1].innerHTML = tally3;
    }
    if (vi[2].innerHTML === '4'){
        vi[1].innerHTML = tally4;
    }
    if (vi[2].innerHTML === '5'){
        vi[1].innerHTML = tally5;
    }
    if (vi[2].innerHTML === '6'){
        vi[1].innerHTML = tally6;
    }
    if (vi[2].innerHTML === '7'){
        vi[1].innerHTML = tally7;
    }
    if (vi[2].innerHTML === '8'){
        vi[1].innerHTML = tally8;
    }
    if (vi[2].innerHTML === '9'){
        vi[1].innerHTML = tally9;
    }
    if (vi[2].innerHTML === '10'){
        vi[1].innerHTML = tally10;
    }
    
    
    if (vii[2].innerHTML === '1'){
        vii[1].innerHTML = tally1;
    }
    if (vii[2].innerHTML === '2'){
        vii[1].innerHTML = tally2;
    }
    if (vii[2].innerHTML === '3'){
        vii[1].innerHTML = tally3;
    }
    if (vii[2].innerHTML === '4'){
        vii[1].innerHTML = tally4;
    }
    if (vii[2].innerHTML === '5'){
        vii[1].innerHTML = tally5;
    }
    if (vii[2].innerHTML === '6'){
        vii[1].innerHTML = tally6;
    }
    if (vii[2].innerHTML === '7'){
        vii[1].innerHTML = tally7;
    }
    if (vii[2].innerHTML === '8'){
        vii[1].innerHTML = tally8;
    }
    if (vii[2].innerHTML === '9'){
        vii[1].innerHTML = tally9;
    }
    if (vii[2].innerHTML === '10'){
        vii[1].innerHTML = tally10;
    }
    
    if (viii[2].innerHTML === '1'){
        viii[1].innerHTML = tally1;
    }
    if (viii[2].innerHTML === '2'){
        viii[1].innerHTML = tally2;
    }
    if (viii[2].innerHTML === '3'){
        viii[1].innerHTML = tally3;
    }
    if (viii[2].innerHTML === '4'){
        viii[1].innerHTML = tally4;
    }
    if (viii[2].innerHTML === '5'){
        viii[1].innerHTML = tally5;
    }
    if (viii[2].innerHTML === '6'){
        viii[1].innerHTML = tally6;
    }
    if (viii[2].innerHTML === '7'){
        viii[1].innerHTML = tally7;
    }
    if (viii[2].innerHTML === '8'){
        viii[1].innerHTML = tally8;
    }
    if (viii[2].innerHTML === '9'){
        viii[1].innerHTML = tally9;
    }
    if (viii[2].innerHTML === '10'){
        viii[1].innerHTML = tally10;
    }
    
    if (ix[2].innerHTML === '1'){
        ix[1].innerHTML = tally1;
    }
    if (ix[2].innerHTML === '2'){
        ix[1].innerHTML = tally2;
    }
    if (ix[2].innerHTML === '3'){
        ix[1].innerHTML = tally3;
    }
    if (ix[2].innerHTML === '4'){
        ix[1].innerHTML = tally4;
    }
    if (ix[2].innerHTML === '5'){
        ix[1].innerHTML = tally5;
    }
    if (ix[2].innerHTML === '6'){
        ix[1].innerHTML = tally6;
    }
    if (ix[2].innerHTML === '7'){
        ix[1].innerHTML = tally7;
    }
    if (ix[2].innerHTML === '8'){
        ix[1].innerHTML = tally8;
    }
    if (ix[2].innerHTML === '9'){
        ix[1].innerHTML = tally9;
    }
    if (ix[2].innerHTML === '10'){
        ix[1].innerHTML = tally10;
    }
    
    if (x[2].innerHTML === '1'){
        x[1].innerHTML = tally1;
    }
    if (x[2].innerHTML === '2'){
        x[1].innerHTML = tally2;
    }
    if (x[2].innerHTML === '3'){
        x[1].innerHTML = tally3;
    }
    if (x[2].innerHTML === '4'){
        x[1].innerHTML = tally4;
    }
    if (x[2].innerHTML === '5'){
        x[1].innerHTML = tally5;
    }
    if (x[2].innerHTML === '6'){
        x[1].innerHTML = tally6;
    }
    if (x[2].innerHTML === '7'){
        x[1].innerHTML = tally7;
    }
    if (x[2].innerHTML === '8'){
        x[1].innerHTML = tally8;
    }
    if (x[2].innerHTML === '9'){
        x[1].innerHTML = tally9;
    }
    if (x[2].innerHTML === '10'){
        x[1].innerHTML = tally10;
    }
    
    
    
    
    
    //Minimum and Maximum
    
    document.getElementById('myMin').innerHTML = "Lowest Score : "+min;
    document.getElementById('myMax').innerHTML = "Highest Score : "+max;
}

function myReset(){
    document.getElementById('scores').value = "";
    document.getElementById('levelex').value = "";
    document.getElementById('calculate').click();
}

function mySelection(){
    const selectedmode = document.getElementById('modes').value;
    const statuser = document.getElementById('user-inputs');
    const statresult = document.getElementById('result');
    const title = document.getElementById('title');
    const meanresult = document.getElementById('mean-result');
    
    if (selectedmode === 'statictics'){
        statuser.style.display = 'block';
        statresult.style.display = 'table';
        title.innerHTML = "Statictics Calculator";
        mean.style.display = 'none';
        meanresult.style.display = 'none';
        document.getElementById('myMin').innerHTML = "";
        document.getElementById('myMax').innerHTML = "";
        document.getElementById('myMean').innerHTML = "";
    }
    
    if (selectedmode === 'mean'){
        statuser.style.display = 'none';
        statresult.style.display = 'none';
        title.innerHTML = "Mean Calculator";
        mean.style.display = 'block';
        meanresult.style.display = 'table';
        document.getElementById('myMin').innerHTML = "";
        document.getElementById('myMax').innerHTML = "";
        document.getElementById('myMean').innerHTML = "";
    }
}


function myMean(){
    const score = document.getElementById('meanlow').value;
    const maxscore = document.getElementById('meanhigh').value;
    const levelex = document.getElementById('meanlevelex').value;
    const slex = (levelex-1);
    const minscore = Number(score);
    const fsraw = document.getElementById('statistics').value;
    const fsnum = fsraw.split(',');
    
    
    const i = document.getElementById("mean-result").rows[1].cells;
    const ii = document.getElementById("mean-result").rows[2].cells;
    const iii = document.getElementById("mean-result").rows[3].cells;
    const iv = document.getElementById("mean-result").rows[4].cells;
    const v = document.getElementById("mean-result").rows[5].cells;
    const vi = document.getElementById("mean-result").rows[6].cells;
    const vii = document.getElementById("mean-result").rows[7].cells;
    const viii = document.getElementById("mean-result").rows[8].cells;
    const ix = document.getElementById("mean-result").rows[9].cells;
    const x = document.getElementById("mean-result").rows[10].cells;
    const xi = document.getElementById("mean-result").rows[11].cells;
    
    
    
    
    i[0].innerHTML = (minscore)+" - "+(minscore+slex);
    ii[0].innerHTML = (minscore+(slex+1))+" - "+(minscore+(slex*2)+1);
    iii[0].innerHTML = (minscore+(slex*2)+2)+" - "+(minscore+(slex*3)+2);
    iv[0].innerHTML = (minscore+(slex*3)+3)+" - "+(minscore+(slex*4)+3);
    v[0].innerHTML = (minscore+(slex*4)+4)+" - "+(minscore+(slex*5)+4);
    vi[0].innerHTML = (minscore+(slex*5)+5)+" - "+(minscore+(slex*6)+5);
    vii[0].innerHTML = (minscore+(slex*6)+6)+" - "+(minscore+(slex*7)+6);
    viii[0].innerHTML = (minscore+(slex*7)+7)+" - "+(minscore+(slex*8)+7);
    ix[0].innerHTML = (minscore+(slex*8)+8)+" - "+(minscore+(slex*9)+8);
    x[0].innerHTML = (minscore+(slex*9)+9)+" - "+(minscore+(slex*10)+9);
    
    
    const inumraw = i[0].innerText;
    const iinumraw = ii[0].innerText;
    const iiinumraw = iii[0].innerText;
    const ivnumraw = iv[0].innerText;
    const vnumraw = v[0].innerText;
    const vinumraw = vi[0].innerText;
    const viinumraw = vii[0].innerText;
    const viiinumraw = viii[0].innerText;
    const ixnumraw = ix[0].innerText;
    const xnumraw = x[0].innerText;
    
    
    const inums = inumraw.split(' - ');
    const iinums = iinumraw.split(' - ');
    const iiinums = iiinumraw.split(' - ');
    const ivnums = ivnumraw.split(' - ');
    const vnums = vnumraw.split(' - ');
    const vinums = vinumraw.split(' - ');
    const viinums = viinumraw.split(' - ');
    const viiinums = viiinumraw.split(' - ');
    const ixnums = ixnumraw.split(' - ');
    const xnums = xnumraw.split(' - ');
    
    
    
    
    const imin = Math.min(...inums);
    const imax = Math.max(...inums);
    const iimin = Math.min(...iinums);
    const iimax = Math.max(...iinums);
    const iiimin = Math.min(...iiinums);
    const iiimax = Math.max(...iiinums);
    const ivmin = Math.min(...ivnums);
    const ivmax = Math.max(...ivnums);
    const vmin = Math.min(...vnums);
    const vmax = Math.max(...vnums);
    const vimin = Math.min(...vinums);
    const vimax = Math.max(...vinums);
    const viimin = Math.min(...viinums);
    const viimax = Math.max(...viinums);
    const viiimin = Math.min(...viiinums);
    const viiimax = Math.max(...viiinums);
    const ixmin = Math.min(...ixnums);
    const ixmax = Math.max(...ixnums);
    const xmin = Math.min(...xnums);
    const xmax = Math.max(...xnums);
    
    
    i[2].innerHTML = (imin+imax)/2;
    ii[2].innerHTML = (iimin+iimax)/2;
    iii[2].innerHTML = (iiimin+iiimax)/2;
    iv[2].innerHTML = (ivmin+ivmax)/2;
    v[2].innerHTML = (vmin+vmax)/2;
    vi[2].innerHTML = (vimin+vimax)/2;
    vii[2].innerHTML = (viimin+viimax)/2;
    viii[2].innerHTML = (viiimin+viiimax)/2;
    ix[2].innerHTML = (ixmin+imax)/2;
    x[2].innerHTML = (xmin+xmax)/2;
    
    
    i[1].innerHTML = +fsnum[0];
    ii[1].innerHTML = +fsnum[1];
    iii[1].innerHTML = +fsnum[2];
    iv[1].innerHTML = +fsnum[3];
    v[1].innerHTML = +fsnum[4];
    vi[1].innerHTML = +fsnum[5];
    vii[1].innerHTML = +fsnum[6];
    viii[1].innerHTML = +fsnum[7];
    ix[1].innerHTML = +fsnum[8];
    x[1].innerHTML = +fsnum[9];
    
    
    
    i[3].innerHTML = +((imin+imax)/2)*+fsnum[0];
    ii[3].innerHTML = +((iimin+iimax)/2)*+fsnum[1];
    iii[3].innerHTML = +((iiimin+iiimax)/2)*+fsnum[2];
    iv[3].innerHTML = +((ivmin+ivmax)/2)*+fsnum[3];
    v[3].innerHTML = +((vmin+vmax)/2)*+fsnum[4];
    vi[3].innerHTML = +((vimin+vimax)/2)*+fsnum[5];
    vii[3].innerHTML = +((viimin+viimax)/2)*+fsnum[6];
    viii[3].innerHTML = +((viiimin+viiimax)/2)*+fsnum[7];
    ix[3].innerHTML = +((ixmin+ixmax)/2)*+fsnum[8];
    x[3].innerHTML = +((xmin+xmax)/2)*+fsnum[9];
    
    
    if (i[1].innerText === "NaN"){
        i[1].innerHTML = "0";
    }
    if (ii[1].innerText === "NaN"){
        ii[1].innerHTML = "0";
    }
    if (iii[1].innerText === "NaN"){
        iii[1].innerHTML = "0"
    }
    if (iv[1].innerText === "NaN"){
        iv[1].innerHTML = "0"
    }
    if (v[1].innerText === "NaN"){
        v[1].innerHTML = "0"
    }
    if (vi[1].innerText === "NaN"){
        vi[1].innerHTML = "0"
    }
    if (vii[1].innerText === "NaN"){
        vii[1].innerHTML = "0"
    }
    if (viii[1].innerText === "NaN"){
        viii[1].innerHTML = "0"
    }
    if (ix[1].innerText === "NaN"){
        ix[1].innerHTML = "0"
    }
    if (x[1].innerText === "NaN"){
        x[1].innerHTML = "0"
    }
    if (i[3].innerText === "NaN"){
        i[3].innerHTML = "0";
    }
    if (ii[3].innerText === "NaN"){
        ii[3].innerHTML = "0";
    }
    if (iii[3].innerText === "NaN"){
        iii[3].innerHTML = "0"
    }
    if (iv[3].innerText === "NaN"){
        iv[3].innerHTML = "0"
    }
    if (v[3].innerText === "NaN"){
        v[3].innerHTML = "0"
    }
    if (vi[3].innerText === "NaN"){
        vi[3].innerHTML = "0"
    }
    if (vii[3].innerText === "NaN"){
        vii[3].innerHTML = "0"
    }
    if (viii[3].innerText === "NaN"){
        viii[3].innerHTML = "0"
    }
    if (ix[3].innerText === "NaN"){
        ix[3].innerHTML = "0"
    }
    if (x[3].innerText === "NaN"){
        x[3].innerHTML = "0"
    }
    
    
    const n1 = i[1].innerText;
    const n2 = ii[1].innerText;
    const n3 = iii[1].innerText;
    const n4 = iv[1].innerText;
    const n5 = v[1].innerText;
    const n6 = vi[1].innerText;
    const n7 = vii[1].innerText;
    const n8 = viii[1].innerText;
    const n9 = ix[1].innerText;
    const n10 = x[1].innerText;
    
    
    xi[1].innerHTML = ("N = ")+(Number(n1)+Number(n2)+Number(n3)+Number(n4)+Number(n5)+Number(n6)+Number(n7)+Number(n8)+Number(n9)+Number(n10));
    
    xi[3].innerHTML =('<i class="fa-solid fa-sigma"></i>'+"fx<sup>1</sup> = ")+(Number(i[3].innerText)+Number(ii[3].innerText)+Number(iii[3].innerText)+Number(iv[3].innerText)+Number(v[3].innerText)+Number(vi[3].innerText)+Number(vii[3].innerText)+Number(viii[3].innerText)+Number(ix[3].innerText)+Number(x[3].innerText));
    
    const totalstat = (Number(n1)+Number(n2)+Number(n3)+Number(n4)+Number(n5)+Number(n6)+Number(n7)+Number(n8)+Number(n9)+Number(n10));
    const totalsigma = (Number(i[3].innerText)+Number(ii[3].innerText)+Number(iii[3].innerText)+Number(iv[3].innerText)+Number(v[3].innerText)+Number(vi[3].innerText)+Number(vii[3].innerText)+Number(viii[3].innerText)+Number(ix[3].innerText)+Number(x[3].innerText));
    
    const meananswer = totalsigma/totalstat;
    
    document.getElementById('myMin').innerHTML = "Lowest score : "+ minscore;
    document.getElementById('myMax').innerHTML = "Highest score : "+ maxscore;
    
    
    document.getElementById('mr').innerHTML = ("Mean(M) = ")+('<i class="fa-solid fa-sigma"></i>')+("fx<sup>1</sup>/N = ")+(totalsigma+"/"+totalstat +" = ")+(meananswer.toFixed(2));
    

}
