currenttab=document.getElementById('stats');
document.getElementById('tabpanel').style.display="block";
currenttab.style.display="block";
function switchtabs(n)
{
    currenttab.style.display="none";
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
    }
    
    currenttab.style.display="block";
}
