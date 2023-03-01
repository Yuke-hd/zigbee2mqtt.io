"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74637],{475339:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-752209df","path":"/devices/SW2500ZB.html","title":"Sinopé SW2500ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé SW2500ZB control via MQTT","description":"Integrate your Sinopé SW2500ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-03-16T20:41:09.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Timer_seconds (numeric)","slug":"timer-seconds-numeric","link":"#timer-seconds-numeric","children":[]},{"level":3,"title":"Led_intensity_on (numeric)","slug":"led-intensity-on-numeric","link":"#led-intensity-on-numeric","children":[]},{"level":3,"title":"Led_intensity_off (numeric)","slug":"led-intensity-off-numeric","link":"#led-intensity-off-numeric","children":[]},{"level":3,"title":"Led_color_on (composite)","slug":"led-color-on-composite","link":"#led-color-on-composite","children":[]},{"level":3,"title":"Led_color_off (composite)","slug":"led-color-off-composite","link":"#led-color-off-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1677686651000},"filePathRelative":"devices/SW2500ZB.md"}')},462137:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const d=(0,i._)("h1",{id:"sinope-sw2500zb",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#sinope-sw2500zb","aria-hidden":"true"},"#"),(0,i.Uk)(" Sinopé SW2500ZB")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SW2500ZB")],-1),c=(0,i._)("td",null,"Vendor",-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee smart light switch")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), timer_seconds, led_intensity_on, led_intensity_off, led_color_on, led_color_off, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SW2500ZB.jpg",alt:"Sinopé SW2500ZB"})])],-1),r=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="timer-seconds-numeric" tabindex="-1"><a class="header-anchor" href="#timer-seconds-numeric" aria-hidden="true">#</a> Timer_seconds (numeric)</h3><p>Automatically turn off load after x seconds. Value can be found in the published state on the <code>timer_seconds</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;timer_seconds&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer_seconds&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10800</code>.</p><h3 id="led-intensity-on-numeric" tabindex="-1"><a class="header-anchor" href="#led-intensity-on-numeric" aria-hidden="true">#</a> Led_intensity_on (numeric)</h3><p>Control status LED intensity when load ON. Value can be found in the published state on the <code>led_intensity_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_intensity_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_intensity_on&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="led-intensity-off-numeric" tabindex="-1"><a class="header-anchor" href="#led-intensity-off-numeric" aria-hidden="true">#</a> Led_intensity_off (numeric)</h3><p>Control status LED intensity when load OFF. Value can be found in the published state on the <code>led_intensity_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_intensity_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_intensity_off&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="led-color-on-composite" tabindex="-1"><a class="header-anchor" href="#led-color-on-composite" aria-hidden="true">#</a> Led_color_on (composite)</h3><p>Control status LED color when load ON. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_color_on&quot;: {&quot;r&quot;: VALUE, &quot;g&quot;: VALUE, &quot;b&quot;: VALUE}}</code></p><ul><li><code>r</code> (numeric)</li><li><code>g</code> (numeric)</li><li><code>b</code> (numeric)</li></ul><h3 id="led-color-off-composite" tabindex="-1"><a class="header-anchor" href="#led-color-off-composite" aria-hidden="true">#</a> Led_color_off (composite)</h3><p>Control status LED color when load OFF. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_color_off&quot;: {&quot;r&quot;: VALUE, &quot;g&quot;: VALUE, &quot;b&quot;: VALUE}}</code></p><ul><li><code>r</code> (numeric)</li><li><code>g</code> (numeric)</li><li><code>b</code> (numeric)</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[n,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,i.w5)((()=>[(0,i.Uk)("Sinopé")])),_:1})])]),a,s,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);