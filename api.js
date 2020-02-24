const ffmpeg = require('fluent-ffmpeg')

ffmpeg('./G.E.M. 邓紫棋 - 喜欢你.mp3').seek(0).duration(10).save('./0.mp3')
ffmpeg('./G.E.M. 邓紫棋 - 喜欢你.mp3').seek(10).duration(10).save('./1.mp3')
ffmpeg('./G.E.M. 邓紫棋 - 喜欢你.mp3').seek(20).duration(10).save('./2.mp3')
ffmpeg('./G.E.M. 邓紫棋 - 喜欢你.mp3').seek(30).duration(10).save('./3.mp3')
ffmpeg('./G.E.M. 邓紫棋 - 喜欢你.mp3').seek(40).duration(10).save('./4.mp3')
ffmpeg('./G.E.M. 邓紫棋 - 喜欢你.mp3').seek(50).duration(10).save('./5.mp3')