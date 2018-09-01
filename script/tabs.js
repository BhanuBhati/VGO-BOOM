currenttab=document.getElementById('stats');
currenttab.style.visibility="visible";
function switchtabs(n)
{
    currenttab.style.visibility="hidden";
    switch(n){
        case 'button_chat':
            currenttab=document.getElementById('chat');
            break;
        case 'button_history':
            currenttab=document.getElementById('history');
            break;
        case 'button_stats':
            currenttab=document.getElementById('stats');
            break;
    }goihfihSSS
    
    currenttab.style.visibility="visible";
}
