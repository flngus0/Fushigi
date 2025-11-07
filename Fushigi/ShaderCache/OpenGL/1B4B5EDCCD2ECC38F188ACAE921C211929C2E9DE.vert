#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 4) in vec4 in_attr4;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    int temp_8;
    int temp_9;
    uint temp_10;
    int temp_11;
    int temp_12;
    int temp_13;
    int temp_14;
    int temp_15;
    int temp_16;
    int temp_17;
    uint temp_18;
    uint temp_19;
    int temp_20;
    precise float temp_21;
    int temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    uint temp_26;
    int temp_27;
    int temp_28;
    int temp_29;
    int temp_30;
    uint temp_31;
    uint temp_32;
    int temp_33;
    precise float temp_34;
    int temp_35;
    uint temp_36;
    int temp_37;
    precise float temp_38;
    uint temp_39;
    int temp_40;
    int temp_41;
    int temp_42;
    int temp_43;
    uint temp_44;
    uint temp_45;
    int temp_46;
    precise float temp_47;
    int temp_48;
    uint temp_49;
    int temp_50;
    precise float temp_51;
    uint temp_52;
    uint temp_53;
    int temp_54;
    precise float temp_55;
    int temp_56;
    uint temp_57;
    int temp_58;
    precise float temp_59;
    int temp_60;
    uint temp_61;
    uint temp_62;
    int temp_63;
    precise float temp_64;
    int temp_65;
    uint temp_66;
    int temp_67;
    precise float temp_68;
    int temp_69;
    uint temp_70;
    uint temp_71;
    int temp_72;
    precise float temp_73;
    int temp_74;
    uint temp_75;
    int temp_76;
    precise float temp_77;
    int temp_78;
    uint temp_79;
    uint temp_80;
    int temp_81;
    precise float temp_82;
    int temp_83;
    uint temp_84;
    int temp_85;
    precise float temp_86;
    uint temp_87;
    uint temp_88;
    int temp_89;
    precise float temp_90;
    int temp_91;
    uint temp_92;
    int temp_93;
    precise float temp_94;
    uint temp_95;
    uint temp_96;
    int temp_97;
    precise float temp_98;
    int temp_99;
    uint temp_100;
    int temp_101;
    precise float temp_102;
    int temp_103;
    uint temp_104;
    uint temp_105;
    int temp_106;
    precise float temp_107;
    int temp_108;
    uint temp_109;
    int temp_110;
    precise float temp_111;
    int temp_112;
    uint temp_113;
    uint temp_114;
    int temp_115;
    precise float temp_116;
    int temp_117;
    uint temp_118;
    int temp_119;
    precise float temp_120;
    int temp_121;
    uint temp_122;
    uint temp_123;
    int temp_124;
    precise float temp_125;
    int temp_126;
    uint temp_127;
    int temp_128;
    precise float temp_129;
    int temp_130;
    uint temp_131;
    uint temp_132;
    int temp_133;
    precise float temp_134;
    int temp_135;
    uint temp_136;
    int temp_137;
    precise float temp_138;
    int temp_139;
    uint temp_140;
    uint temp_141;
    int temp_142;
    precise float temp_143;
    int temp_144;
    uint temp_145;
    int temp_146;
    precise float temp_147;
    int temp_148;
    uint temp_149;
    uint temp_150;
    int temp_151;
    precise float temp_152;
    int temp_153;
    uint temp_154;
    int temp_155;
    precise float temp_156;
    int temp_157;
    uint temp_158;
    uint temp_159;
    int temp_160;
    precise float temp_161;
    int temp_162;
    uint temp_163;
    int temp_164;
    precise float temp_165;
    int temp_166;
    uint temp_167;
    uint temp_168;
    int temp_169;
    precise float temp_170;
    int temp_171;
    uint temp_172;
    int temp_173;
    precise float temp_174;
    int temp_175;
    uint temp_176;
    uint temp_177;
    int temp_178;
    precise float temp_179;
    int temp_180;
    uint temp_181;
    int temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    int temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    int temp_210;
    precise float temp_211;
    int temp_212;
    uint temp_213;
    uint temp_214;
    int temp_215;
    precise float temp_216;
    int temp_217;
    uint temp_218;
    int temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    int temp_223;
    uint temp_224;
    uint temp_225;
    int temp_226;
    precise float temp_227;
    int temp_228;
    uint temp_229;
    int temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    int temp_236;
    uint temp_237;
    uint temp_238;
    int temp_239;
    precise float temp_240;
    precise float temp_241;
    int temp_242;
    uint temp_243;
    uint temp_244;
    int temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000107F008 Mov32i
    // 0x000010: 0xEFD87F800E07FF02 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0xEFD87F800E47FF01 Ald
    temp_1 = in_attr6.y;
    // 0x000028: 0xEFD87F800E87FF03 Ald
    temp_2 = in_attr6.z;
    // 0x000030: 0xEFD87F800807FF25 Ald
    temp_3 = in_attr0.x;
    // 0x000038: 0xEFD87F800847FF24 Ald
    temp_4 = in_attr0.y;
    // 0x000048: 0xEFD87F800887FF27 Ald
    temp_5 = in_attr0.z;
    // 0x000050: 0x36007F800307020C Xmad
    temp_6 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_7 = temp_6 * 48;
    // 0x000058: 0x36007F8003070100 Xmad
    temp_8 = floatBitsToInt(temp_1) & 0xFFFF;
    temp_9 = temp_8 * 48;
    // 0x000068: 0x362006100307020C Xmad
    temp_10 = floatBitsToUint(temp_0) >> 16;
    temp_11 = int(temp_10) * 48;
    temp_12 = temp_11 << 16;
    temp_13 = temp_12 + temp_7;
    // 0x000070: 0x3600040003070308 Xmad
    temp_14 = floatBitsToInt(temp_2) & 0xFFFF;
    temp_15 = temp_14 * 48;
    temp_16 = temp_15 + 16;
    // 0x000078: 0xEF95008002070C18 Ldc
    temp_17 = temp_13 + 32;
    temp_18 = uint(temp_17) >> 2;
    temp_19 = temp_18 >> 2;
    temp_20 = int(temp_18) & 3;
    temp_21 = vp_c8.data[int(temp_19)][temp_20];
    temp_22 = int(temp_18) + 1;
    temp_23 = uint(temp_22) >> 2;
    temp_24 = temp_22 & 3;
    temp_25 = vp_c8.data[int(temp_23)][temp_24];
    // 0x000088: 0x3620001003070100 Xmad
    temp_26 = floatBitsToUint(temp_1) >> 16;
    temp_27 = int(temp_26) * 48;
    temp_28 = temp_27 << 16;
    temp_29 = temp_28 + temp_9;
    // 0x000090: 0xEF95008001070C16 Ldc
    temp_30 = temp_13 + 16;
    temp_31 = uint(temp_30) >> 2;
    temp_32 = temp_31 >> 2;
    temp_33 = int(temp_31) & 3;
    temp_34 = vp_c8.data[int(temp_32)][temp_33];
    temp_35 = int(temp_31) + 1;
    temp_36 = uint(temp_35) >> 2;
    temp_37 = temp_35 & 3;
    temp_38 = vp_c8.data[int(temp_36)][temp_37];
    // 0x000098: 0x3620041003070308 Xmad
    temp_39 = floatBitsToUint(temp_2) >> 16;
    temp_40 = int(temp_39) * 48;
    temp_41 = temp_40 << 16;
    temp_42 = temp_41 + temp_16;
    // 0x0000A8: 0xEF9500800107001E Ldc
    temp_43 = temp_29 + 16;
    temp_44 = uint(temp_43) >> 2;
    temp_45 = temp_44 >> 2;
    temp_46 = int(temp_44) & 3;
    temp_47 = vp_c8.data[int(temp_45)][temp_46];
    temp_48 = int(temp_44) + 1;
    temp_49 = uint(temp_48) >> 2;
    temp_50 = temp_48 & 3;
    temp_51 = vp_c8.data[int(temp_49)][temp_50];
    // 0x0000B0: 0xEF95008000070020 Ldc
    temp_52 = uint(temp_29) >> 2;
    temp_53 = temp_52 >> 2;
    temp_54 = int(temp_52) & 3;
    temp_55 = vp_c8.data[int(temp_53)][temp_54];
    temp_56 = int(temp_52) + 1;
    temp_57 = uint(temp_56) >> 2;
    temp_58 = temp_56 & 3;
    temp_59 = vp_c8.data[int(temp_57)][temp_58];
    // 0x0000B8: 0xEF9500800207001C Ldc
    temp_60 = temp_29 + 32;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_61 >> 2;
    temp_63 = int(temp_61) & 3;
    temp_64 = vp_c8.data[int(temp_62)][temp_63];
    temp_65 = int(temp_61) + 1;
    temp_66 = uint(temp_65) >> 2;
    temp_67 = temp_65 & 3;
    temp_68 = vp_c8.data[int(temp_66)][temp_67];
    // 0x0000C8: 0xEF95008001870012 Ldc
    temp_69 = temp_29 + 24;
    temp_70 = uint(temp_69) >> 2;
    temp_71 = temp_70 >> 2;
    temp_72 = int(temp_70) & 3;
    temp_73 = vp_c8.data[int(temp_71)][temp_72];
    temp_74 = int(temp_70) + 1;
    temp_75 = uint(temp_74) >> 2;
    temp_76 = temp_74 & 3;
    temp_77 = vp_c8.data[int(temp_75)][temp_76];
    // 0x0000D0: 0xEF95008FFF070804 Ldc
    temp_78 = temp_42 + -16;
    temp_79 = uint(temp_78) >> 2;
    temp_80 = temp_79 >> 2;
    temp_81 = int(temp_79) & 3;
    temp_82 = vp_c8.data[int(temp_80)][temp_81];
    temp_83 = int(temp_79) + 1;
    temp_84 = uint(temp_83) >> 2;
    temp_85 = temp_83 & 3;
    temp_86 = vp_c8.data[int(temp_84)][temp_85];
    // 0x0000D8: 0xEF95008000070802 Ldc
    temp_87 = uint(temp_42) >> 2;
    temp_88 = temp_87 >> 2;
    temp_89 = int(temp_87) & 3;
    temp_90 = vp_c8.data[int(temp_88)][temp_89];
    temp_91 = int(temp_87) + 1;
    temp_92 = uint(temp_91) >> 2;
    temp_93 = temp_91 & 3;
    temp_94 = vp_c8.data[int(temp_92)][temp_93];
    // 0x0000E8: 0xEF95008000070C1A Ldc
    temp_95 = uint(temp_13) >> 2;
    temp_96 = temp_95 >> 2;
    temp_97 = int(temp_95) & 3;
    temp_98 = vp_c8.data[int(temp_96)][temp_97];
    temp_99 = int(temp_95) + 1;
    temp_100 = uint(temp_99) >> 2;
    temp_101 = temp_99 & 3;
    temp_102 = vp_c8.data[int(temp_100)][temp_101];
    // 0x0000F0: 0xEF95008000870014 Ldc
    temp_103 = temp_29 + 8;
    temp_104 = uint(temp_103) >> 2;
    temp_105 = temp_104 >> 2;
    temp_106 = int(temp_104) & 3;
    temp_107 = vp_c8.data[int(temp_105)][temp_106];
    temp_108 = int(temp_104) + 1;
    temp_109 = uint(temp_108) >> 2;
    temp_110 = temp_108 & 3;
    temp_111 = vp_c8.data[int(temp_109)][temp_110];
    // 0x0000F8: 0xEF95008001070822 Ldc
    temp_112 = temp_42 + 16;
    temp_113 = uint(temp_112) >> 2;
    temp_114 = temp_113 >> 2;
    temp_115 = int(temp_113) & 3;
    temp_116 = vp_c8.data[int(temp_114)][temp_115];
    temp_117 = int(temp_113) + 1;
    temp_118 = uint(temp_117) >> 2;
    temp_119 = temp_117 & 3;
    temp_120 = vp_c8.data[int(temp_118)][temp_119];
    // 0x000108: 0xEF95008FFF87080A Ldc
    temp_121 = temp_42 + -8;
    temp_122 = uint(temp_121) >> 2;
    temp_123 = temp_122 >> 2;
    temp_124 = int(temp_122) & 3;
    temp_125 = vp_c8.data[int(temp_123)][temp_124];
    temp_126 = int(temp_122) + 1;
    temp_127 = uint(temp_126) >> 2;
    temp_128 = temp_126 & 3;
    temp_129 = vp_c8.data[int(temp_127)][temp_128];
    // 0x000110: 0xEF95008000870806 Ldc
    temp_130 = temp_42 + 8;
    temp_131 = uint(temp_130) >> 2;
    temp_132 = temp_131 >> 2;
    temp_133 = int(temp_131) & 3;
    temp_134 = vp_c8.data[int(temp_132)][temp_133];
    temp_135 = int(temp_131) + 1;
    temp_136 = uint(temp_135) >> 2;
    temp_137 = temp_135 & 3;
    temp_138 = vp_c8.data[int(temp_136)][temp_137];
    // 0x000118: 0xEF95008000870C10 Ldc
    temp_139 = temp_13 + 8;
    temp_140 = uint(temp_139) >> 2;
    temp_141 = temp_140 >> 2;
    temp_142 = int(temp_140) & 3;
    temp_143 = vp_c8.data[int(temp_141)][temp_142];
    temp_144 = int(temp_140) + 1;
    temp_145 = uint(temp_144) >> 2;
    temp_146 = temp_144 & 3;
    temp_147 = vp_c8.data[int(temp_145)][temp_146];
    // 0x000128: 0xEF95008002870C0E Ldc
    temp_148 = temp_13 + 40;
    temp_149 = uint(temp_148) >> 2;
    temp_150 = temp_149 >> 2;
    temp_151 = int(temp_149) & 3;
    temp_152 = vp_c8.data[int(temp_150)][temp_151];
    temp_153 = int(temp_149) + 1;
    temp_154 = uint(temp_153) >> 2;
    temp_155 = temp_153 & 3;
    temp_156 = vp_c8.data[int(temp_154)][temp_155];
    // 0x000130: 0xEF95008002870000 Ldc
    temp_157 = temp_29 + 40;
    temp_158 = uint(temp_157) >> 2;
    temp_159 = temp_158 >> 2;
    temp_160 = int(temp_158) & 3;
    temp_161 = vp_c8.data[int(temp_159)][temp_160];
    temp_162 = int(temp_158) + 1;
    temp_163 = uint(temp_162) >> 2;
    temp_164 = temp_162 & 3;
    temp_165 = vp_c8.data[int(temp_163)][temp_164];
    // 0x000138: 0xEF95008001870808 Ldc
    temp_166 = temp_42 + 24;
    temp_167 = uint(temp_166) >> 2;
    temp_168 = temp_167 >> 2;
    temp_169 = int(temp_167) & 3;
    temp_170 = vp_c8.data[int(temp_168)][temp_169];
    temp_171 = int(temp_167) + 1;
    temp_172 = uint(temp_171) >> 2;
    temp_173 = temp_171 & 3;
    temp_174 = vp_c8.data[int(temp_172)][temp_173];
    // 0x000148: 0xEF95008001870C0C Ldc
    temp_175 = temp_13 + 24;
    temp_176 = uint(temp_175) >> 2;
    temp_177 = temp_176 >> 2;
    temp_178 = int(temp_176) & 3;
    temp_179 = vp_c8.data[int(temp_177)][temp_178];
    temp_180 = int(temp_176) + 1;
    temp_181 = uint(temp_180) >> 2;
    temp_182 = temp_180 & 3;
    temp_183 = vp_c8.data[int(temp_181)][temp_182];
    // 0x000150: 0x5C68100002571818 Fmul
    temp_184 = temp_21 * temp_3;
    // 0x000158: 0x5C68100002571616 Fmul
    temp_185 = temp_34 * temp_3;
    // 0x000168: 0x5C68100002571E1E Fmul
    temp_186 = temp_47 * temp_3;
    // 0x000170: 0x5C68100002572026 Fmul
    temp_187 = temp_55 * temp_3;
    // 0x000178: 0x59A00C0002471918 Ffma
    temp_188 = fma(temp_25, temp_4, temp_184);
    // 0x000188: 0x5C68100002571C1C Fmul
    temp_189 = temp_64 * temp_3;
    // 0x000190: 0x59A00B0002471719 Ffma
    temp_190 = fma(temp_38, temp_4, temp_185);
    // 0x000198: 0xEFD87F800C47FF16 Ald
    temp_191 = in_attr4.y;
    // 0x0001A8: 0x5C68100002570404 Fmul
    temp_192 = temp_82 * temp_3;
    // 0x0001B0: 0x4CB0119002371A17 F2i
    temp_193 = trunc(vp_c4.data[8].w);
    temp_194 = int(temp_193);
    // 0x0001B8: 0x59A00F0002471F20 Ffma
    temp_195 = fma(temp_51, temp_4, temp_186);
    // 0x0001C8: 0x5C68100002570202 Fmul
    temp_196 = temp_90 * temp_3;
    // 0x0001D0: 0x59A0130002472121 Ffma
    temp_197 = fma(temp_59, temp_4, temp_187);
    // 0x0001D8: 0x59A00E0002471D1D Ffma
    temp_198 = fma(temp_68, temp_4, temp_189);
    // 0x0001E8: 0x5C68100002571A1A Fmul
    temp_199 = temp_98 * temp_3;
    // 0x0001F0: 0x59A0020002470504 Ffma
    temp_200 = fma(temp_86, temp_4, temp_192);
    // 0x0001F8: 0x59A0100002771220 Ffma
    temp_201 = fma(temp_73, temp_5, temp_195);
    // 0x000208: 0xEFD87F800C07FF12 Ald
    temp_202 = in_attr4.x;
    // 0x000210: 0x59A0010002470305 Ffma
    temp_203 = fma(temp_94, temp_4, temp_196);
    // 0x000218: 0x59A0108002771402 Ffma
    temp_204 = fma(temp_107, temp_5, temp_197);
    // 0x000228: 0x5C68100002572222 Fmul
    temp_205 = temp_116 * temp_3;
    // 0x000230: 0x59A00E8002770014 Ffma
    temp_206 = fma(temp_161, temp_5, temp_198);
    // 0x000238: 0xEFD87F800C87FF00 Ald
    temp_207 = in_attr4.z;
    // 0x000248: 0x59A00D0002471B1A Ffma
    temp_208 = fma(temp_102, temp_4, temp_199);
    // 0x000250: 0x59A0020002770A0A Ffma
    temp_209 = fma(temp_125, temp_5, temp_200);
    // 0x000258: 0x3848000000471717 Shl
    temp_210 = temp_194 << 4;
    // 0x000268: 0x59A0028002770606 Ffma
    temp_211 = fma(temp_134, temp_5, temp_203);
    // 0x000270: 0xEF95007048071704 Ldc
    temp_212 = temp_210 + 0x480;
    temp_213 = uint(temp_212) >> 2;
    temp_214 = temp_213 >> 2;
    temp_215 = int(temp_213) & 3;
    temp_216 = vp_c7.data[int(temp_214)][temp_215];
    temp_217 = int(temp_213) + 1;
    temp_218 = uint(temp_217) >> 2;
    temp_219 = temp_217 & 3;
    temp_220 = vp_c7.data[int(temp_218)][temp_219];
    // 0x000278: 0x59A0110002472322 Ffma
    temp_221 = fma(temp_120, temp_4, temp_205);
    // 0x000288: 0x5C58100000271515 Fadd
    temp_222 = temp_111 + temp_204;
    // 0x000290: 0xEF95007068071702 Ldc
    temp_223 = temp_210 + 0x680;
    temp_224 = uint(temp_223) >> 2;
    temp_225 = temp_224 >> 2;
    temp_226 = int(temp_224) & 3;
    temp_227 = vp_c7.data[int(temp_225)][temp_226];
    temp_228 = int(temp_224) + 1;
    temp_229 = uint(temp_228) >> 2;
    temp_230 = temp_228 & 3;
    temp_231 = vp_c7.data[int(temp_229)][temp_230];
    // 0x000298: 0x59A00D0002771010 Ffma
    temp_232 = fma(temp_143, temp_5, temp_208);
    // 0x0002A8: 0x59A00C8002770C0C Ffma
    temp_233 = fma(temp_179, temp_5, temp_190);
    // 0x0002B0: 0x5C58100002071313 Fadd
    temp_234 = temp_77 + temp_201;
    // 0x0002B8: 0x5C58100001470114 Fadd
    temp_235 = temp_165 + temp_206;
    // 0x0002C8: 0xEF94007068871701 Ldc
    temp_236 = temp_210 + 0x688;
    temp_237 = uint(temp_236) >> 2;
    temp_238 = temp_237 >> 2;
    temp_239 = int(temp_237) & 3;
    temp_240 = vp_c7.data[int(temp_238)][temp_239];
    // 0x0002D0: 0x59A0110002770822 Ffma
    temp_241 = fma(temp_170, temp_5, temp_221);
    // 0x0002D8: 0xEF94007048871708 Ldc
    temp_242 = temp_210 + 0x488;
    temp_243 = uint(temp_242) >> 2;
    temp_244 = temp_243 >> 2;
    temp_245 = int(temp_243) & 3;
    temp_246 = vp_c7.data[int(temp_244)][temp_245];
    // 0x0002E8: 0x59A00C0002770E0E Ffma
    temp_247 = fma(temp_152, temp_5, temp_188);
    // 0x0002F0: 0x5C58100001071110 Fadd
    temp_248 = temp_147 + temp_232;
    // 0x0002F8: 0x5C68100001671515 Fmul
    temp_249 = temp_222 * temp_191;
    // 0x000308: 0x5C58100000C70D0C Fadd
    temp_250 = temp_183 + temp_233;
    // 0x000310: 0x5C68100001671313 Fmul
    temp_251 = temp_234 * temp_191;
    // 0x000318: 0x5C58100000A70B0A Fadd
    temp_252 = temp_129 + temp_209;
    // 0x000328: 0x5C58100000E70F0F Fadd
    temp_253 = temp_156 + temp_247;
    // 0x000330: 0x5C68100001671414 Fmul
    temp_254 = temp_235 * temp_191;
    // 0x000338: 0x59A00A8001271015 Ffma
    temp_255 = fma(temp_248, temp_202, temp_249);
    // 0x000348: 0x5C58100000670706 Fadd
    temp_256 = temp_138 + temp_211;
    // 0x000350: 0xEFD87F801047FF07 Ald
    temp_257 = in_attr8.y;
    // 0x000358: 0x59A0098001270C13 Ffma
    temp_258 = fma(temp_250, temp_202, temp_251);
    // 0x000368: 0x5C58100002270909 Fadd
    temp_259 = temp_174 + temp_241;
    // 0x000370: 0x59A00A0001270F0F Ffma
    temp_260 = fma(temp_253, temp_202, temp_254);
    // 0x000378: 0x59A00A8000070A15 Ffma
    temp_261 = fma(temp_252, temp_207, temp_255);
    // 0x000388: 0xEFD87F801007FF0A Ald
    temp_262 = in_attr8.x;
    // 0x000390: 0x59A0098000070606 Ffma
    temp_263 = fma(temp_256, temp_207, temp_258);
    // 0x000398: 0x59A007800007090F Ffma
    temp_264 = fma(temp_259, temp_207, temp_260);
    // 0x0003A8: 0x59A0010000471502 Ffma
    temp_265 = fma(temp_261, temp_216, temp_227);
    // 0x0003B0: 0x59A0018000570603 Ffma
    temp_266 = fma(temp_263, temp_220, temp_231);
    // 0x0003B8: 0x59A0008000870F01 Ffma
    temp_267 = fma(temp_264, temp_246, temp_240);
    // 0x0003C8: 0x4C68100C00070205 Fmul
    temp_268 = temp_265 * vp_c3.data[0].x;
    // 0x0003D0: 0x4C68100C00470204 Fmul
    temp_269 = temp_265 * vp_c3.data[1].x;
    // 0x0003D8: 0x4C98079400370008 Mov
    // 0x0003E8: 0x4C58101002070100 Fadd
    temp_270 = temp_267 + vp_c4.data[8].x;
    // 0x0003F0: 0x49A0028C00170306 Ffma
    temp_271 = fma(temp_266, vp_c3.data[0].y, temp_268);
    // 0x0003F8: 0x4C68100C00870205 Fmul
    temp_272 = temp_265 * vp_c3.data[2].x;
    // 0x000408: 0x49A0020C00570302 Ffma
    temp_273 = fma(temp_266, vp_c3.data[1].y, temp_269);
    // 0x000410: 0x4C98079400270004 Mov
    // 0x000418: 0x51A0041400570708 Ffma
    temp_274 = fma(temp_257, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000428: 0x49A0030C00270006 Ffma
    temp_275 = fma(temp_270, vp_c3.data[0].z, temp_271);
    // 0x000430: 0x49A0028C00970303 Ffma
    temp_276 = fma(temp_266, vp_c3.data[2].y, temp_272);
    // 0x000438: 0x49A0010C00670002 Ffma
    temp_277 = fma(temp_270, vp_c3.data[1].z, temp_273);
    // 0x000448: 0x51A0021400470705 Ffma
    temp_278 = fma(temp_257, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000450: 0x49A0041400170A08 Ffma
    temp_279 = fma(temp_262, vp_c5.data[0].y, temp_274);
    // 0x000458: 0x4C58100C00370606 Fadd
    temp_280 = temp_275 + vp_c3.data[0].w;
    // 0x000468: 0xEFF07F800947FF08 Ast
    out_attr1.y = temp_279;
    // 0x000470: 0x4C58100C00770202 Fadd
    temp_281 = temp_277 + vp_c3.data[1].w;
    // 0x000478: 0x49A0018C00A70000 Ffma
    temp_282 = fma(temp_270, vp_c3.data[2].z, temp_276);
    // 0x000488: 0x49A0029400070A09 Ffma
    temp_283 = fma(temp_262, vp_c5.data[0].x, temp_278);
    // 0x000490: 0x49A0018C00A70101 Ffma
    temp_284 = fma(temp_267, vp_c3.data[2].z, temp_276);
    // 0x000498: 0xEFF07F800907FF09 Ast
    out_attr1.x = temp_283;
    // 0x0004A8: 0x4C68100C02870604 Fmul
    temp_285 = temp_280 * vp_c3.data[10].x;
    // 0x0004B0: 0x4C68100C02470607 Fmul
    temp_286 = temp_280 * vp_c3.data[9].x;
    // 0x0004B8: 0x4C68100C02070603 Fmul
    temp_287 = temp_280 * vp_c3.data[8].x;
    // 0x0004C8: 0x4C58100C00B70000 Fadd
    temp_288 = temp_282 + vp_c3.data[2].w;
    // 0x0004D0: 0x4C58100C00B70101 Fadd
    temp_289 = temp_284 + vp_c3.data[2].w;
    // 0x0004D8: 0x49A0020C02970205 Ffma
    temp_290 = fma(temp_281, vp_c3.data[10].y, temp_285);
    // 0x0004E8: 0xEFF07F800887FF01 Ast
    out_attr0.z = temp_289;
    // 0x0004F0: 0x4C68100C01C70604 Fmul
    temp_291 = temp_280 * vp_c3.data[7].x;
    // 0x0004F8: 0x49A0038C02570207 Ffma
    temp_292 = fma(temp_281, vp_c3.data[9].y, temp_286);
    // 0x000508: 0x49A0018C02170203 Ffma
    temp_293 = fma(temp_281, vp_c3.data[8].y, temp_287);
    // 0x000510: 0x49A0028C02A70005 Ffma
    temp_294 = fma(temp_288, vp_c3.data[10].z, temp_290);
    // 0x000518: 0x49A0020C01D70202 Ffma
    temp_295 = fma(temp_281, vp_c3.data[7].y, temp_291);
    // 0x000528: 0x49A0038C02670007 Ffma
    temp_296 = fma(temp_288, vp_c3.data[9].z, temp_292);
    // 0x000530: 0x49A0018C02270003 Ffma
    temp_297 = fma(temp_288, vp_c3.data[8].z, temp_293);
    // 0x000538: 0x4C58100C02B70505 Fadd
    temp_298 = temp_294 + vp_c3.data[10].w;
    // 0x000548: 0x49A0010C01E70002 Ffma
    temp_299 = fma(temp_288, vp_c3.data[7].z, temp_295);
    // 0x000550: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_298;
    // 0x000558: 0x4C58100C02770707 Fadd
    temp_300 = temp_296 + vp_c3.data[9].w;
    // 0x000568: 0x4C58100C02370303 Fadd
    temp_301 = temp_297 + vp_c3.data[8].w;
    // 0x000570: 0xEFF07F800787FF07 Ast
    gl_Position.z = temp_300;
    // 0x000578: 0x4C58100C01F70202 Fadd
    temp_302 = temp_299 + vp_c3.data[7].w;
    // 0x000588: 0xEFF07F800747FF03 Ast
    gl_Position.y = temp_301;
    // 0x000590: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_302;
    // 0x000598: 0xE30000000007000F Exit
    return;
}
