import{r as n,o as s,c as a,a as t,d as e}from"./404.md.eba8deb4.js";const p='{"title":"Block Texture Variation","description":"","frontmatter":{"title":"Block Texture Variation","tags":["intermediate"]},"headers":[{"level":2,"title":"Example Dirt Texture Variation","slug":"example-dirt-texture-variation"},{"level":2,"title":"Example of weighted dirt amounts","slug":"example-of-weighted-dirt-amounts"}],"relativePath":"blocks/block-texture-variation.md","lastUpdated":1631031863535}',o={},r=e('<p>Block texture variation is when a single block can have multiple textures. This is useful for blocks such as dirt or grass, where some blocks may have slight variations such as small rocks and others don&#39;t.</p><p>To enable texture variations, create a <code>terrain_texture.json</code> file in the textures folder. The <code>terrain_texture.json</code> in the block definition of the texture should be set to a dictionary with a variation key, and the variation key is an array of dictionaries that must contain a path key pointing to the texture file and may contain a weight to control how often the textures show up.</p><h2 id="example-dirt-texture-variation"><a class="header-anchor" href="#example-dirt-texture-variation" aria-hidden="true">#</a> Example Dirt Texture Variation</h2><p>This is an example of how to create texture variations for the dirt block with three images:</p><ul><li>Create a <code>textures/terrain_texture.json</code> file in the resource pack</li><li>In the JSON file, you need to define the blocks that have variation, as shown below</li></ul>',5),l=e('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;num_mip_levels&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;padding&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vanilla&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;dirt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;variations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt2&quot;</span> <span class="token punctuation">}</span>\n\t\t\t\t<span class="token punctuation">]</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.terrain&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>Create or modify three dirt textures, name them <code>dirt0.png</code>, <code>dirt1.png</code>, and <code>dirt2.png</code></li><li>Copy the <code>dirt0.png</code>, <code>dirt1.png</code>, and <code>dirt2.png</code> to the location noted in the path variable. This could contain additional folders if you want to be orderly.</li></ul><h2 id="example-of-weighted-dirt-amounts"><a class="header-anchor" href="#example-of-weighted-dirt-amounts" aria-hidden="true">#</a> Example of weighted dirt amounts</h2><p>After completing the example above, if you want to adjust the weights, edit the <code>terrain_textures.json</code> to include a weight field as shown below.</p>',4),u=e('<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;num_mip_levels&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;padding&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vanilla&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;dirt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;variations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt0&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt1&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">{</span> <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/dirt2&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>\n\t\t\t\t<span class="token punctuation">]</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.terrain&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Notes:</p><ul><li>This does appear to grab the texture set file. However, the texture set files do not seem to grasp the MER or regular file defined in the texture set. -- <a href="https://bugs.mojang.com/browse/MCPE-126617" target="_blank" rel="noopener noreferrer">Bug Report</a></li></ul>',3);o.render=function(e,p,o,c,i,k){const d=n("CodeHeader");return s(),a("div",null,[r,t(d),l,t(d),u])};export default o;export{p as __pageData};