export class TruTickerConfig {

    static get LEFT_TO_RIGHT() {
        return 'LeftToRight';
    }

    static get TOP_TO_BOTTOM() {
        return 'TopToBottom';
    }

    static get RIGHT_TO_LEFT() {
        return 'RightToLeft';
    }

    static get BOTTOM_TO_TOP() {
        return 'BottomToTop';
    }

    static get RECT() {
        return 'Rect';
    }

    static get ROUND_RECT() {
        return 'RoundRect';
    }

    static get RECT_STROKE() {
        return 'RectStroke';
    }

    static get ROUND_RECT_STROKE() {
        return 'RoundRectStroke';
    }

    static get INFINITE() {
        return 'Infinite';
    }

    static get ONCE() {
        return 'Once';
    }

    static get LOOP_N() {
        return 'LoopN';
    }

    static get builder() {
        return Object.create(TruTickerConfig.Builder);
    }

    #container;
    #messages;
    #onInitialize;
    #autoStart;
    //behavior
    #fields;
    #direction;
    #speed;
    #behavior;
    #loop;
    //font stuff
    #fontFamily;
    #fontSize;
    #fontColor;
    //message stuff
    #messageDelimiter;
    #messageDelimiterColor;
    //new message stuff
    #highLightColor;
    #highLightDuration;
    //background stuff
    #backgroundType;
    #backgroundColor;
    #backgroundPadding;
    #backgroundRadius;
    #backgroundStrokeWidth;
    #backgroundStrokeColor;

    get container() {
        return this.#container;
    }
    get messages() {
        return this.#messages;
    }
    get onInitialize() {
        return this.#onInitialize;
    }
    get autoStart() {
        return this.#autoStart;
    }
    get fields() {
        return this.#fields;
    }
    get direction() {
        return this.#direction;
    }
    get speed() {
        return this.#speed;
    }
    get behavior() {
        return this.#behavior;
    }
    get loop() {
        return this.#loop;
    }
    get fontFamily() {
        return this.#fontFamily;
    }
    get fontSize() {
        return this.#fontSize;
    }
    get fontColor() {
        return this.#fontColor;
    }
    get messageDelimiter() {
        return this.#messageDelimiter;
    }
    get messageDelimiterColor() {
        return this.#messageDelimiterColor;
    }
    get highLightColor() {
        return this.#highLightColor;
    }
    get highLightDuration() {
        return this.#highLightDuration;
    }
    get backgroundType() {
        return this.#backgroundType;
    }
    get backgroundColor() {
        return this.#backgroundColor;
    }
    get backgroundPadding() {
        return this.#backgroundPadding;
    }
    get backgroundRadius() {
        return this.#backgroundRadius;
    }
    get backgroundStrokeWidth() {
        return this.#backgroundStrokeWidth;
    }
    get backgroundStrokeColor() {
        return this.#backgroundStrokeColor;
    }

    constructor(builder) {
        this.#container = builder._container;
        this.#messages = builder._messages;
        this.#onInitialize = builder._onInitialize;
        this.#autoStart = builder._autoStart;
        //behavior
        this.#fields = builder._fields;
        this.#direction = builder._direction;
        this.#speed = builder._speed;
        this.#behavior = builder._behavior;
        this.#loop = builder._loop;
        //font stuff
        this.#fontFamily = builder._fontFamily;
        this.#fontSize = builder._fontSize;
        this.#fontColor = builder._fontColor;
        //message stuff
        this.#messageDelimiter = builder._messageDelimiter;
        this.#messageDelimiterColor = builder._messageDelimiterColor;
        //new message stuff
        this.#highLightColor = builder._highLightColor;
        this.#highLightDuration = builder._highLightDuration;
        //background stuff
        this.#backgroundType = builder._backgroundType;
        this.#backgroundColor = builder._backgroundColor;
        this.#backgroundPadding = builder._backgroundPadding;
        this.#backgroundRadius = builder._backgroundRadius;
        this.#backgroundStrokeWidth = builder._backgroundStrokeWidth;
        this.#backgroundStrokeColor = builder._backgroundStrokeColor;
    }

    static Builder = {

        _container: null,
        _messages: {},
        _onInitialize: null,
        _autoStart: true,
        _fields: 15,
        _direction: TruTickerConfig.LEFT_TO_RIGHT,
        _speed: 100,
        _behavior: TruTickerConfig.INFINITE,
        _loop: -1,
        _fontFamily: 'Courier',
        _fontSize: 12,
        _fontColor: '#000000',
        _messageDelimiter: '|',
        _messageDelimiterColor: 'black',
        _highLightColor: '#FFFF00',
        _highLightDuration: 2,
        _backgroundType: TruTickerConfig.RECT,
        _backgroundColor: '#CCCCCC',
        _backgroundPadding: 0,
        _backgroundRadius: 10,
        _backgroundStrokeWidth: 2, //todo
        _backgroundStrokeColor: 'black',//todo

        container: function(val) {
            this._container = val;
            return this;
        },
        messages: function(val) {
            this._messages = val;
            return this;
        },
        autoStart: function(val) {
            this._autoStart = val;
            return this;
        },
        onInitialize: function(func) {
            this._onInitialize = func;
            return this;
        },
        fields: function(val) {
            this._fields = val;
            return this;
        },
        direction: function(val) {
            this._direction = val;
            return this;
        },
        speed: function(val) {
            this._speed = val;
            return this;
        },
        behavior: function(val) {
            this._behavior = val;
            return this;
        },
        loop: function(val) {
            this._loop = val;
            return this;
        },
        fontFamily: function(val) {
            this._fontFamily = val;
            return this;
        },
        fontSize: function(val) {
            this._fontSize = val;
            return this;
        },
        fontColor: function(val) {
            this._fontColor = val;
            return this;
        },
        messageDelimiter: function(val) {
            this._messageDelimiter = val;
            return this;
        },
        messageDelimiterColor: function(val) {
            this._messageDelimiterColor = val;
            return this;
        },
        highLightColor: function(val) {
            this._highLightColor = val;
            return this;
        },
        highLightDuration: function(val) {
            this._highLightDuration = val;
            return this;
        },
        backgroundType: function(val) {
            this._backgroundType = val;
            return this;
        },
        backgroundColor: function(val) {
            this._backgroundColor = val;
            return this;
        },
        backgroundPadding: function(val) {
            this._backgroundPadding = val;
            return this;
        },
        backgroundRadius: function(val) {
            this._backgroundRadius = val;
            return this;
        },
        backgroundStrokeWidth: function(val) {
            this._backgroundStrokeWidth = val;
            return this;
        },
        backgroundStrokeColor: function(val){
            this._backgroundStrokeColor = val;
            return this;
        },
        build: function() {
            if (this._container === null) {
                throw new Error('TruTicker config requires a container.');
            }
            if (this._autoStart === false) {
                if (this._onInitialize === null) {
                    throw new Error('If autoStart is false an intialize callback must be provided.');
                }
            }
            if (this._behavior === TruTickerConfig.LOOP_N) {
                if (this._loop === -1) {
                    throw new Error('LOOP_N behavior requires a loop length to be provided.');
                }
            }
            return new TruTickerConfig(this);
        }
    }

};

export class TruTicker {

    #styles = ['.ticker-holder-vertical {display: grid;}',
        '.ticker-holder-horizontal {display: block; }',
        '.tf {display: inline-block; }',
        '.bg-rect {background: blue; }',
        '.ticker-holder-vertical .top-rounded {border-radius: ::radiusPlaceholder::px ::radiusPlaceholder::px 0 0; }',
        '.ticker-holder-vertical .bottom-rounded {border-radius: 0 0 ::radiusPlaceholder::px ::radiusPlaceholder::px; }',
        '.ticker-holder-horizontal .top-rounded {border-radius: ::radiusPlaceholder::px 0 0 ::radiusPlaceholder::px; }',
        '.ticker-holder-horizontal .bottom-rounded {border-radius: 0 ::radiusPlaceholder::px ::radiusPlaceholder::px 0; }',
        '.ticker-holder-vertical .bg-outline-top {border-top-style: solid; border-right-style: solid; border-bottom-style: none; border-left-style: solid; }',
        '.ticker-holder-vertical .bg-outline-middle {border-top-style: none; border-right-style: solid; border-bottom-style: none; border-left-style: solid; }',
        '.ticker-holder-vertical .bg-outline-bottom {border-top-style: none; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; }',
        '.ticker-holder-horizontal .bg-outline-top {border-top-style: solid; border-right-style: none; border-bottom-style: solid; border-left-style: solid; }',
        '.ticker-holder-horizontal .bg-outline-middle {border-top-style: solid; border-right-style: none; border-bottom-style: solid; border-left-style: none; }',
        '.ticker-holder-horizontal .bg-outline-bottom {border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: none; }'
    ];

    #config
    #holder;
    #used = [];
    #current = []
    #unused = [];
    #timer;
    #count = 0;
    #highLightCount = 0;
    #isDirty = false;
    #countHighLight = false;

    constructor(config) {
        if (!config) {
            throw new Error('TruTicker requires a configuration.')
        }
        this.#config = config;
        this.#addStyling();
    };

    start() {
        this.#timer = setInterval(this.#update, this.#config.speed, this);
    };

    stop() {
        clearInterval(this.#timer);
    };

    add(messages) {
        messages.forEach((message) => {
            this.#config.messages.push(message + '<ticker::dirty>');
        });
        this.#isDirty = true;
        this.#countHighLight = true;
        this.#highLightCount = 0;
    }

    #getOrderDirection() {
        switch (this.#config.direction) {
            case TruTickerConfig.LEFT_TO_RIGHT:
            case TruTickerConfig.TOP_TO_BOTTOM:
                return 'normal';
            case TruTickerConfig.RIGHT_TO_LEFT:
            case TruTickerConfig.BOTTOM_TO_TOP:
                return 'reverse';
        }
    }

    #addStyling() {
        this.#styles[4] = this.#styles[4].replaceAll('::radiusPlaceholder::',this.#config.backgroundRadius);
        this.#styles[5] = this.#styles[5].replaceAll('::radiusPlaceholder::',this.#config.backgroundRadius);
        this.#styles[6] = this.#styles[6].replaceAll('::radiusPlaceholder::',this.#config.backgroundRadius);
        this.#styles[7] = this.#styles[7].replaceAll('::radiusPlaceholder::',this.#config.backgroundRadius);
        let allStyles = this.#styles.join('');
        let styleEl = document.createElement('style');
        styleEl.textContent = allStyles;
        document.head.append(styleEl);
        this.#initFields();
    }

    #initFields() {
        this.#holder = document.createElement('div');
        this.#config.container.appendChild(this.#holder);
        let measurements = this.#getTextMeasuredWidthAndHeight();
        let mesauredWidth = measurements.width;
        let mesauredHeight = measurements.height;
        for (var i = 0; i < this.#config.fields; i++) {
            var textHolder = document.createElement('span');
            textHolder.setAttribute('id', 'text' + i);
            if (this.#config.direction === TruTickerConfig.LEFT_TO_RIGHT || this.#config.direction === TruTickerConfig.RIGHT_TO_LEFT) {
                this.#holder.setAttribute('class', 'ticker-holder-horizontal');
                textHolder.className = 'tf horizontal';
            } else if (this.#config.direction === TruTickerConfig.TOP_TO_BOTTOM || this.#config.direction === TruTickerConfig.BOTTOM_TO_TOP) {
                this.#holder.setAttribute('class', 'ticker-holder-vertical');
                textHolder.className = 'tf vertical';
            };
            this.#holder.appendChild(textHolder);
            textHolder.style['font-family'] = this.#config.fontFace;
            textHolder.style.color = this.#config.fontColor;
            textHolder.style['font-size'] = this.#config.fontSize;
            textHolder.style.width = mesauredWidth + 'px';
            textHolder.style.height = mesauredHeight + 'px';
            textHolder.style['border-width'] = this.#config.backgroundStrokeWidth + 'px';
            textHolder.style['border-color'] = this.#config.backgroundStrokeColor;
        };
        this.#createBackGround();
    };

    #getTextMeasuredWidthAndHeight() {
        var textHolder = document.createElement('span');
        textHolder.innerHTML = 'W';
        textHolder.setAttribute('id', 'textMeasure');
        this.#holder.appendChild(textHolder);
        textHolder.style['font-family'] = this.#config.fontFace;
        textHolder.style.color = this.#config.fontColor;
        textHolder.style['font-size'] = this.#config.fontSize;
        let textHolderWidth = textHolder.getBoundingClientRect().width;
        let textHolderHeight = textHolder.getBoundingClientRect().height;
        this.#holder.removeChild(textHolder);
        return {
            width: textHolderWidth,
            height: textHolderHeight
        }
    }

    #createBackGround() {
        for (var i = 0; i < this.#holder.children.length; i++) {
            let child = this.#holder.children[i];
            child.style.background = this.#config.backgroundColor;
            child.style.padding = this.#config.backgroundPadding + 'px';
            let currentClass = child.getAttribute('class');
            switch (this.#config.backgroundType) {
                case TruTickerConfig.RECT:
                    child.setAttribute('class', currentClass + ' bg-rect');
                    break;
                case TruTickerConfig.ROUND_RECT:
                    if (i === 0) {
                        child.setAttribute('class', currentClass + ' bg-rect top-rounded');
                    } else if (i === this.#holder.children.length - 1) {
                        child.setAttribute('class', currentClass + ' bg-rect bottom-rounded');
                    } else {
                        child.setAttribute('class', currentClass + ' bg-rect');
                    }
                    break;
                case TruTickerConfig.RECT_STROKE:
                    if (i === 0) {
                        child.setAttribute('class', currentClass + ' bg-outline-top');
                    } else if (i === this.#holder.children.length - 1) {
                        child.setAttribute('class', currentClass + ' bg-outline-bottom');
                    } else {
                        child.setAttribute('class', currentClass + ' bg-outline-middle');
                    }
                    break;
                case TruTickerConfig.ROUND_RECT_STROKE:
                    if (i === 0) {
                        child.setAttribute('class', currentClass + ' bg-outline-top top-rounded');
                    } else if (i === this.#holder.children.length - 1) {
                        child.setAttribute('class', currentClass + ' bg-outline-bottom bottom-rounded');
                    } else {
                        child.setAttribute('class', currentClass + ' bg-outline-middle');
                    }
                    break;
            };
        }
        for (var i = 0; i < this.#holder.children.length; i++) {
            let child = this.#holder.children[i];
            child.innerHTML = '&emsp;';
        }
        this.#orderArray(this.#config.messages);
    }

    #orderArray(messages) {
        let direction = this.#getOrderDirection();
        var cleanedMessages = [];
        messages.forEach((message, i) => {
            var useHighlightColor = false;
            if (message.includes('<ticker::dirty>')) {
                message = message.replace('<ticker::dirty>', '');
                useHighlightColor = true;
                cleanedMessages.push({
                    val: message,
                    index: i
                });
            }
            let chars = message.split('');
            chars.forEach((chr, i) => {
                this.#unused.unshift({
                    val: this.#sanitizeInput(chr),
                    color: (useHighlightColor) ? this.#config.highLightColor : 'global',
                    delimiter: false
                });
            });
            if (i !== this.#config.messages.length - 1) {
                this.#unused.unshift({
                    val: this.#config.messageDelimiter,
                    color: this.#config.messageDelimiterColor,
                    delimiter: true
                });
            }
        });
        cleanedMessages.forEach((message) => {
            messages[message.index] = message.val;
        });
        cleanedMessages = [];
        for (var i = 0; i < this.#config.fields; i++) {
            if (direction === 'normal') {
                this.#unused.push({
                    val: '&emsp;',
                    color: 'global',
                    delimiter: false
                });
            } else {
                this.#unused.unshift({
                    val: '&emsp;',
                    color: 'global',
                    delimiter: false
                });
            }
        }
        if (direction === 'reverse') {
            this.#unused.reverse();
        }
        if (this.#config.autoStart) {
            this.start();
        } else {
            this.#config.onInitialize(this);
        }
    };

    #sanitizeInput(chr) {
        if (chr === ' ') {
            return '&nbsp;';
        }
        return chr;
    }

    #update(ref) {
        if (ref.#unused.length === 0) {
            if (ref.#isDirty) {
                clearInterval(ref.#timer);
                ref.#unused = [];
                ref.#current = [];
                ref.#used = [];
                ref.#orderArray(ref.#config.messages);
                ref.#isDirty = false;
                return;
            }
            for (var i = 0; i < ref.#config.fields; i++) {
                let drain = ref.#current.pop();
                ref.#used.unshift(drain);
            }
            let allUsedItemCount = ref.#used.length;
            for (var i = 0; i < allUsedItemCount; i++) {
                let next = ref.#used.shift();
                ref.#unused.unshift(next);
            }
            if (ref.#countHighLight) {
                ref.#highLightCount++;
                if (ref.#highLightCount === ref.#config.highLightDuration) {
                    ref.#highLightCount = 0;
                    ref.#countHighLight = false;
                    ref.#unused.forEach((message) => {
                        if (!message.delimiter) {
                            message.color = 'global';
                        }
                    });
                }
            }
        }
        let next = ref.#unused.shift();
        ref.#current.unshift(next);
        if (ref.#current.length > ref.#config.fields) {
            let last = ref.#current.pop();
            ref.#used.unshift(last);
        }
        if (ref.#unused.length === 0) {
            if (ref.#config.behavior === TruTickerConfig.ONCE) {
                clearInterval(ref.#timer);
                ref.#count = 0;
            }
            if (ref.#config.behavior === TruTickerConfig.LOOP_N) {
                ref.#count++;
                if (ref.#count === ref.#config.loop) {
                    clearInterval(ref.#timer);
                    ref.#count = 0;
                }
            }
        }
        switch (ref.#config.direction) {
            case "LeftToRight":
            case "TopToBottom":
                for (var i = 0; i < ref.#current.length; i++) {
                    let child = ref.#holder.children[i];
                    child.innerHTML = ref.#current[i].val;
                    if (ref.#current[i].delimiter) {
                        child.style.color = ref.#current[i].color;
                    } else if (ref.#current[i].color !== 'global' && ref.#highLightCount < ref.#config.highLightDuration) {
                        child.style.color = ref.#current[i].color;
                    } else {
                        child.style.color = ref.#config.fontColor;
                    }
                }
                break;
            case "RightToLeft":
            case "BottomToTop":
                for (var i = 0; i < ref.#current.length; i++) {
                    let child = ref.#holder.children[ref.#config.fields - 1 - i];
                    child.innerHTML = ref.#current[i].val;
                    if (ref.#current[i].delimiter) {
                        child.style.color = ref.#current[i].color;
                    } else if (ref.#current[i].color !== 'global' && ref.#highLightCount < ref.#config.highLightDuration) {
                        child.style.color = ref.#current[i].color;
                    } else {
                        child.style.color = ref.#config.fontColor;
                    }
                }
                break;
        };
    };

}