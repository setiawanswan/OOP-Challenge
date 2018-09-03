//Nodelog
let Log = require('log');

class loger{
    static logue(){
        const fs = require('fs');
        let log = new  Log('debug',fs.createWriteStream('app.log'));

        log.info('This is an information about something')
        log.error('We cant divide any numbers by zero.')
        log.notice('Someone loves your status.')
        log.warning('Insufficient funds.')
        log.debug('This is debug message.')
        log.alert('Achtung! Achtung.')
        log.critical('Medic!! Weve got critical damages.')
        log.emergency('System hung. Contact system administrator immediately!')
        return log
    }
}

loger.logue()