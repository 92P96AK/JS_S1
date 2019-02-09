// js code for removing extra spaces from given string to a function and it also create string that has 
// every first character of string toUpperCase() and others toLowerCase()
// It mightbe applicable for database systems since we have to search exactly the same string as we put during storing 
// So during storing and searching time we just need to call this function
// It will output the same for PRADIP KHARAL,   PRADIP KHARAL, PradiP Kharal,PrAdIp         kharaL,.... etc. to Pradip Kharal
// you can call this function simply searchoptimization('your string goes here').



searchoptimization = (v) => {
    v = v.trim().toLowerCase().replace(/\s+/g, ' ').split('');
    for (i = 0, l = v.length; i < l; i++) {
        (i == 0) ? v[0] = v[0].toUpperCase(): ((v[i] == ' ') ? v[i + 1] = v[i + 1].toUpperCase() : null)
    }
    return v.join('');

}
